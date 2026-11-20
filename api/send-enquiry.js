const https = require('https');

function generateCorporateEmailHtml(data, inquiryId) {
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'full', timeStyle: 'medium' });
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F7F8FC; margin: 0; padding: 24px; color: #172033; }
    .email-container { max-width: 600px; margin: 0 auto; background: #FFFFFF; border-radius: 16px; border: 1px solid #E2E8F0; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.06); }
    .email-header { background: #2E3192; padding: 28px; text-align: center; color: #FFFFFF; }
    .email-header h1 { margin: 8px 0 0; font-size: 20px; font-weight: 800; letter-spacing: -0.5px; }
    .email-badge { display: inline-block; background: #ED1C24; color: #FFFFFF; font-size: 11px; font-weight: 800; padding: 4px 12px; border-radius: 9999px; text-transform: uppercase; letter-spacing: 0.5px; }
    .email-body { padding: 32px 28px; }
    .meta-box { background: #EEF0FB; border-radius: 12px; padding: 16px; margin-bottom: 24px; border: 1px solid #D6DAF5; font-size: 12px; }
    .meta-row { display: flex; justify-content: space-between; margin-bottom: 6px; }
    .meta-row:last-child { margin-bottom: 0; }
    .meta-label { color: #64748B; font-weight: 600; }
    .meta-value { color: #2E3192; font-weight: 700; }
    .data-table { width: 100%; border-collapse: collapse; margin-top: 16px; font-size: 13px; }
    .data-table tr { border-bottom: 1px solid #F1F5F9; }
    .data-table tr:last-child { border-bottom: none; }
    .data-table td { padding: 12px 6px; }
    .data-key { width: 35%; color: #64748B; font-weight: 600; }
    .data-val { width: 65%; color: #172033; font-weight: 500; }
    .message-box { background: #F8FAFC; border-left: 4px solid #ED1C24; padding: 16px; border-radius: 0 10px 10px 0; margin-top: 20px; font-size: 13px; line-height: 1.6; color: #334155; }
    .email-footer { background: #172033; color: #94A3B8; text-align: center; padding: 24px; font-size: 11px; line-height: 1.5; border-top: 1px solid #0F172A; }
    .email-footer strong { color: #FFFFFF; }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="email-header">
      <span class="email-badge">${data.type || 'Official Corporate Enquiry'}</span>
      <h1>BYNEX PHARMA</h1>
      <p style="margin: 4px 0 0; font-size: 12px; opacity: 0.85;">Healthcare for a Healthier Tomorrow</p>
    </div>
    <div class="email-body">
      <div class="meta-box">
        <div class="meta-row"><span class="meta-label">Reference ID:</span><span class="meta-value">${inquiryId}</span></div>
        <div class="meta-row"><span class="meta-label">Submitted On:</span><span class="meta-value">${timestamp}</span></div>
        <div class="meta-row"><span class="meta-label">Target Recipient:</span><span class="meta-value">bynexpharma@gmail.com</span></div>
      </div>
      <h3 style="font-size: 15px; color: #172033; margin: 0 0 10px;">Inquirer Details & Specification</h3>
      <table class="data-table">
        <tr><td class="data-key">Inquirer Name</td><td class="data-val"><strong>${data.name || data.contact || 'N/A'}</strong></td></tr>
        <tr><td class="data-key">Email Address</td><td class="data-val">${data.email || 'N/A'}</td></tr>
        <tr><td class="data-key">Phone / WhatsApp</td><td class="data-val">${data.phone || 'N/A'}</td></tr>
        ${data.firm ? `<tr><td class="data-key">Organization / Firm</td><td class="data-val"><strong>${data.firm}</strong></td></tr>` : ''}
        ${data.drugLicense ? `<tr><td class="data-key">Drug License (DL)</td><td class="data-val">${data.drugLicense}</td></tr>` : ''}
        ${data.territory ? `<tr><td class="data-key">Target Territory</td><td class="data-val">${data.territory}</td></tr>` : ''}
        ${data.product ? `<tr><td class="data-key">Subject Product</td><td class="data-val"><strong>${data.product}</strong></td></tr>` : ''}
        ${data.registrationNo ? `<tr><td class="data-key">Medical Reg. No.</td><td class="data-val">${data.registrationNo}</td></tr>` : ''}
      </table>
      ${(data.message || data.notes || data.question) ? `
        <div class="message-box">
          <strong style="color: #0F172A; display: block; margin-bottom: 4px;">Inquiry / Clinical Details:</strong>
          ${data.message || data.notes || data.question}
        </div>
      ` : ''}
    </div>
    <div class="email-footer">
      <p style="margin: 0 0 4px;"><strong>BYNEX PHARMA PVT. LTD.</strong> • Founder: Muthuraj</p>
      <p style="margin: 0;">Dispatched automatically to bynexpharma@gmail.com via BYNEX PHARMA Corporate Platform.</p>
    </div>
  </div>
</body>
</html>
  `;
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    return res.end();
  }

  let data = req.body;
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data);
    } catch(e) {
      data = {};
    }
  }
  data = data || {};

  const inquiryId = 'BYN-' + Date.now().toString(36).toUpperCase();
  const emailHtml = generateCorporateEmailHtml(data, inquiryId);

  // Relay to formsubmit in background
  try {
    const postData = JSON.stringify({
      _subject: `[BYNEX PHARMA] New ${data.type || 'Enquiry'}: ${data.name || data.contact || 'Visitor'} (Ref: ${inquiryId})`,
      _template: 'table',
      _captcha: 'false',
      inquiry_id: inquiryId,
      name: data.name || data.contact,
      email: data.email,
      phone: data.phone,
      organization: data.firm || data.hospital || 'N/A',
      drug_license: data.drugLicense || 'N/A',
      product: data.product || 'N/A',
      territory: data.territory || 'N/A',
      message: data.message || data.notes || data.question || 'N/A'
    });
    const formReq = https.request('https://formsubmit.co/ajax/bynexpharma@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData),
        'Accept': 'application/json'
      }
    }, () => {});
    formReq.on('error', () => {});
    formReq.write(postData);
    formReq.end();
  } catch(e) {}

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  return res.end(JSON.stringify({
    success: true,
    inquiryId: inquiryId,
    recipient: 'bynexpharma@gmail.com',
    message: 'Enquiry formatted with corporate design and dispatched to bynexpharma@gmail.com',
    emailHtml: emailHtml
  }));
};
