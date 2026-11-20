const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3050;
const PUBLIC_DIR = path.join(__dirname, 'public');

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
  '.pdf': 'application/pdf'
};

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

const server = http.createServer((req, res) => {
  let parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  let pathname = decodeURIComponent(parsedUrl.pathname);

  // API Endpoint: POST /api/send-enquiry
  if (req.method === 'POST' && pathname === '/api/send-enquiry') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const data = JSON.parse(body || '{}');
        const inquiryId = 'BYN-' + Date.now().toString(36).toUpperCase();
        const emailHtml = generateCorporateEmailHtml(data, inquiryId);

        // Also relay to formsubmit in background if accessible
        try {
          const https = require('https');
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

        res.writeHead(200, {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        });
        res.end(JSON.stringify({
          success: true,
          inquiryId: inquiryId,
          recipient: 'bynexpharma@gmail.com',
          message: 'Enquiry formatted with corporate design and dispatched to bynexpharma@gmail.com',
          emailHtml: emailHtml
        }));
      } catch(err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: 'Invalid payload' }));
      }
    });
    return;
  }

  if (pathname === '/' || pathname === '') {
    pathname = '/index.html';
  }

  const cleanPath = pathname.replace(/^\/+/, '');
  const filePath = path.join(PUBLIC_DIR, cleanPath);
  const resolvedPath = path.resolve(filePath);

  // Security: restrict to PUBLIC_DIR
  if (!resolvedPath.startsWith(path.resolve(PUBLIC_DIR))) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden');
    return;
  }

  fs.stat(resolvedPath, (err, stats) => {
    if (err || !stats.isFile()) {
      const fallbackPath = path.join(PUBLIC_DIR, 'index.html');
      if (fs.existsSync(fallbackPath) && !pathname.includes('.')) {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
        fs.createReadStream(fallbackPath).pipe(res);
        return;
      }
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end(`404 Not Found: ${pathname}`);
      return;
    }

    const ext = path.extname(resolvedPath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'X-Content-Type-Options': 'nosniff'
    });
    fs.createReadStream(resolvedPath).pipe(res);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`BYNEX PHARMA Platform is live at http://localhost:${PORT}`);
});
