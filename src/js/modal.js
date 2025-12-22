// Modal and booking
function openInquiryModal() {
    document.getElementById('inquiryModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeInquiryModal() {
    document.getElementById('inquiryModal').classList.remove('active');
    document.body.style.overflow = 'auto';
    document.getElementById('inquiryForm').reset();
}

function generateInvoice(data, packageInfo) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.setFontSize(24);
    doc.setFont(undefined, 'bold');
    doc.text('LensL0re Photography', 105, 20, { align: 'center' });
    doc.setFontSize(12);
    doc.setFont(undefined, 'normal');
    doc.text('Invoice', 105, 30, { align: 'center' });
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text('Client Information:', 20, 50);
    doc.setFontSize(11);
    doc.setFont(undefined, 'normal');
    doc.text(`Name: ${data.clientName}`, 20, 60);
    doc.text(`Phone: ${data.clientPhone}`, 20, 67);
    doc.text(`Location: ${data.clientLocation}`, 20, 74);
    doc.text(`Session Date: ${new Date(data.clientDateTime).toLocaleDateString()}`, 20, 81);
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text('Package Details:', 20, 100);
    doc.setFontSize(11);
    doc.setFont(undefined, 'normal');
    doc.text(`Package: ${packageInfo.name}`, 20, 110);
    doc.text(`Duration: ${packageInfo.duration}`, 20, 117);
    doc.text(`Amount: ${packageInfo.amount}`, 20, 124);
    if (data.clientMessage) {
        doc.setFontSize(14);
        doc.setFont(undefined, 'bold');
        doc.text('Additional Notes:', 20, 143);
        doc.setFontSize(11);
        doc.setFont(undefined, 'normal');
        const splitMessage = doc.splitTextToSize(data.clientMessage, 170);
        doc.text(splitMessage, 20, 153);
    }
    doc.setFontSize(10);
    doc.text('Thank you for choosing LensL0re Photography!', 105, 280, { align: 'center' });
    doc.text('hello@lenslore.ca | www.lenslore.ca', 105, 287, { align: 'center' });
    doc.save(`LensLore_Invoice_${data.clientName.replace(/\s+/g, '_')}.pdf`);
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('openInquiryBtn2').addEventListener('click', openInquiryModal);
    document.getElementById('cancelInquiry').addEventListener('click', closeInquiryModal);
    document.getElementById('inquiryModal').addEventListener('click', (e) => {
        if (e.target.id === 'inquiryModal') closeInquiryModal();
    });
    
    document.getElementById('inquiryForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const submitBtn = this.querySelector('button[type="submit"]');
        submitBtn.innerHTML = '<span class="relative z-10 flex items-center justify-center"><svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Processing...</span>';
        submitBtn.disabled = true;
        
        const data = Object.fromEntries(new FormData(this));
        const packages = {
            'starter': { name: 'The Headshot Session', duration: '20–30 min, 10–15 photos, 1 outfit, 48hr delivery', amount: '$149–$179' },
            'standard': { name: 'The Branding Mini', duration: '60–75 min, 25-50 photos, 2 outfits, 1 location, 5 day delivery', amount: '$239–$269' },
            'premium': { name: 'The Full Brand Story', duration: '2hr, 40–75 photos, 3 reels, 1–2 locations, Priority delivery', amount: '$399' },
            'studio': { name: 'Premium Full-Day', duration: 'Half-day, 100+ photos, 6–8 reels, Team headshots', amount: '$620' },
            'custom': { name: 'Fashion & Creative Campaigns', duration: 'Custom scoped', amount: 'Custom Quote' }
        };
        const selectedPackage = packages[data.clientPackage] || packages.custom;
        const subject = `Photography Inquiry - ${selectedPackage.name}`;
        const sessionDateTime = new Date(data.clientDateTime).toLocaleString('en-US', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true
        });
        const body = `New Photography Inquiry\n\nPackage: ${selectedPackage.name}\nClient: ${data.clientName}\nPhone: ${data.clientPhone}\nLocation: ${data.clientLocation}\nDate/Time: ${sessionDateTime}\n\n${data.clientMessage ? `Notes: ${data.clientMessage}` : ''}\n\nInvoice has been generated and sent to client.\n\nBest regards,\nLensL0re Booking System`;
        
        setTimeout(() => {
            generateInvoice(data, selectedPackage);
            submitBtn.innerHTML = '<span class="relative z-10 flex items-center justify-center"><svg class="mr-2 h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>Invoice Downloaded!</span>';
            
            setTimeout(() => {
                document.querySelector('.inquiry-modal-content').innerHTML = `
                    <div class="text-center">
                        <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <h3 class="text-3xl font-display font-bold text-gray-900 mb-2">Almost Done!</h3>
                        <p class="text-gray-600 font-medium mb-6">Your invoice has been downloaded. Now send us an email:</p>
                        <div class="bg-gray-50 rounded-2xl p-6 mb-6 text-left">
                            <div class="flex items-center justify-between mb-4">
                                <h4 class="font-bold text-gray-900">Email Details:</h4>
                                <button id="copyEmailBtn" class="text-blue-600 hover:text-blue-700 text-sm font-semibold flex items-center">Copy All</button>
                            </div>
                            <div class="space-y-3">
                                <div><span class="font-semibold text-gray-700">To:</span> <span class="text-blue-600">kiitanki@gmail.com</span></div>
                                <div><span class="font-semibold text-gray-700">Subject:</span> <span class="text-gray-900">${subject}</span></div>
                                <div><span class="font-semibold text-gray-700">Message:</span><pre class="text-sm text-gray-700 mt-2 whitespace-pre-wrap font-sans">${body}</pre></div>
                            </div>
                        </div>
                        <div class="flex gap-4">
                            <a href="mailto:hello@lenslore.ca?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}" class="flex-1 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] text-center">📧 Open Email App</a>
                            <button id="closeSuccessModal" class="flex-1 px-8 py-4 bg-gray-100 text-gray-700 rounded-2xl hover:bg-gray-200 transition-all duration-300 font-semibold">Done</button>
                        </div>
                    </div>
                `;
                document.getElementById('copyEmailBtn').addEventListener('click', function() {
                    navigator.clipboard.writeText(`To: kiitanki@gmail.com\nSubject: ${subject}\n\n${body}`);
                    this.textContent = 'Copied!';
                    setTimeout(() => this.textContent = 'Copy All', 2000);
                });
                document.getElementById('closeSuccessModal').addEventListener('click', closeInquiryModal);
            }, 1500);
        }, 1000);
    });
});
