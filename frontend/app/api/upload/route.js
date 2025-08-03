import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get('resume');

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const affindaRes = await fetch('https://api.affinda.com/v2/resumes', {
      method: 'POST',
      headers: {
        Authorization: `Bearer aff_18f319d6feb5b115dd50bdc6010d30497d2742e1`, // 🔐 Replace with your real key
      },
      body: (() => {
        const form = new FormData();
        form.append('file', new Blob([buffer], { type: file.type }), file.name);
        return form;
      })(),
    });

    const json = await affindaRes.json();
    const data = json.data;

    const atsScore = Math.floor(Math.random() * 51 + 50); // dummy ATS score

    const result = {
      name: data?.name?.text || '',
      email: data?.emails?.[0] || '',
      phone: data?.phoneNumbers?.[0] || '',
      skills: data?.skills?.map(s => s.name) || [],
      education: data?.education?.map(e => {
        const degree = typeof e.accreditation === 'object' ? e.accreditation.text : e.accreditation;
        return `${e.institution || 'Unknown'} (${degree || 'Degree'})`;
      }) || [],
      experience: data?.workExperience?.map(e => `${e.jobTitle || 'Role'} at ${e.organisation || 'Company'}`) || [],
      suggestions: ["Optimize keywords", "Quantify achievements", "Match job descriptions"],
      atsScore,
    };

    return NextResponse.json(result);
  } catch (err) {
    console.error("Upload error:", err);
    return NextResponse.json({ error: 'Failed to process resume' }, { status: 500 });
  }
}

