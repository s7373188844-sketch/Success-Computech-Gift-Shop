import { ServiceCategory, LatestUpdate, ApplicationStatus } from '../types.js';

export const LATEST_UPDATES: LatestUpdate[] = [
  {
    id: 'upd-1',
    date: 'March 2025',
    tag_en: 'Aadhaar Alert',
    tag_ta: 'ஆதார் முக்கிய செய்தி',
    title_en: 'Mandatory Aadhaar Document Update Free Facility',
    title_ta: 'ஆதார் அடையாள & முகவரி ஆவணங்கள் இலவசமாக புதுப்பிக்க கடைசி வாய்ப்பு',
    desc_en: 'Update your Proof of Identity (POI) and Proof of Address (POA) online to avoid deactivation. Visit us or send on WhatsApp.',
    desc_ta: 'ஆதார் கார்டு எடுத்து 10 வருடங்களுக்கு மேல் ஆகியிருந்தால் POI/POA ஆவணங்களை ஆன்லைனில் விரைந்து புதுப்பியுங்கள்.',
    isNew: true,
    linkServiceId: 'aadhaar'
  },
  {
    id: 'upd-2',
    date: 'March 2025',
    tag_en: 'TNPSC Exams',
    tag_ta: 'டி.என்.பி.எஸ்.சி',
    title_en: 'TNPSC Group 4 & Group 2 Application & Hall Ticket Alert',
    title_ta: 'TNPSC குரூப் 4 & 2 விண்ணப்பங்கள் மற்றும் ஹால் டிக்கெட் பதிவிறக்கம் தயார்',
    desc_en: 'Online application assistance, photo/signature resizing according to TNPSC guidelines, and high-quality hall ticket printout.',
    desc_ta: 'சரியான அளவு போட்டோ மற்றும் கையொப்பத்துடன் தேர்வு விண்ணப்பம் & ஹால் டிக்கெட் உடனடியாக பெற்றுக்கொள்ளலாம்.',
    isNew: true,
    linkServiceId: 'tnpsc-exam'
  },
  {
    id: 'upd-3',
    date: 'March 2025',
    tag_en: 'Sabarimala / TTD',
    tag_ta: 'கோயில் முன்பதிவு',
    title_en: 'Sabarimala Virtual Q & Tirupati Special Darshan Ticket Booking Open',
    title_ta: 'சபரிமலை தரிசனம் மற்றும் திருப்பதி ₹300 சிறப்பு தரிசன டிக்கெட் புக்கிங் ஆரம்பம்',
    desc_en: 'Book confirmed online Virtual Queue and Special Entry Darshan tokens with room reservations for pilgrims without queue hassles.',
    desc_ta: 'சபரிமலை விர்ச்சுவல் க்யூ மற்றும் திருப்பதி தேவஸ்தான சிறப்பு தரிசன டிக்கெட் உடனடி முன்பதிவு.',
    isNew: true,
    linkServiceId: 'temple-darshan'
  },
  {
    id: 'upd-4',
    date: 'March 2025',
    tag_en: 'Income Tax & PAN',
    tag_ta: 'பான் கார்டு அறிவிப்பு',
    title_en: 'PAN - Aadhaar Linking & Penalty Exemption Updates',
    title_ta: 'பான் - ஆதார் கார்டு இணைப்பு சரிபார்ப்பு மற்றும் திருத்தம்',
    desc_en: 'Check if your PAN card is operative and link with Aadhaar. Get duplicate PAN or address/name correction.',
    desc_ta: 'உங்கள் பான் கார்டு செயல்படுகிறதா என்பதை சரிபார்த்து பான் திருத்தம் & ரீபிரிண்ட் பெற்றுக்கொள்ளலாம்.',
    isNew: false,
    linkServiceId: 'pan-card'
  },
  {
    id: 'upd-5',
    date: 'March 2025',
    tag_en: 'Driving Licence',
    tag_ta: 'ஓட்டுநர் உரிமம்',
    title_en: 'Driving Licence Paperless Renewal & Address Change online',
    title_ta: 'ஓட்டுநர் உரிமம் (DL) புதுப்பித்தல் மற்றும் முகவரி மாற்றம் ஆன்லைன் சேவை',
    desc_en: 'Renew your expired driving licence and apply for LLR learner license without long wait.',
    desc_ta: 'காலாவதியான ஓட்டுநர் உரிமத்தை ஆன்லைனில் சுலபமாக ரினீவல் செய்து வீட்டில் இருந்தே பெறலாம்.',
    isNew: false,
    linkServiceId: 'driving-licence'
  }
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'id-documents',
    iconName: 'CreditCard',
    title_en: 'ID & Document Services',
    title_ta: 'அடையாள அட்டை & ஆவண சேவைகள்',
    description_en: 'Aadhaar, Smart Card, Voter ID, PAN Card, Synthetic PVC Cards',
    description_ta: 'ஆதார், ஸ்மார்ட் கார்டு, வாக்காளர் அட்டை, பான் கார்டு, PVC பிளாஸ்டிக் கார்டுகள்',
    badge: 'High Demand',
    services: [
      {
        id: 'aadhaar',
        categoryId: 'id-documents',
        name_en: 'Aadhaar Services',
        name_ta: 'ஆதார் சேவைகள்',
        tag_en: 'UIDAI Assistance',
        tag_ta: 'ஆதார் உதவி',
        popular: true,
        shortDesc_en: 'Aadhaar address update, mobile link check, PVC card order, and document validation.',
        shortDesc_ta: 'ஆதார் முகவரி மாற்றம், மொபைல் எண் இணைப்பு சோதனை, ஒரிஜினல் PVC கார்டு ஆர்டர்.',
        subServices_en: [
          'Aadhaar Address Update (Online)',
          'Aadhaar PVC Card Order',
          'Document (POI / POA) Update',
          'Aadhaar Masked / e-Aadhaar Download & Print',
          'Aadhaar-Mobile Link Status Verification',
          'Biometric Lock / Unlock Support'
        ],
        subServices_ta: [
          'ஆதார் முகவரி மாற்றம் (ஆன்லைன்)',
          'அரசு அங்கீகரித்த PVC கார்டு ஆர்டர்',
          'POI மற்றும் POA ஆவண புதுப்பித்தல்',
          'இ-ஆதார் கலர் பிரிண்ட் & லேமினேஷன்',
          'மொபைல் எண் இணைப்பு நிலையை அறிதல்',
          'பயோமெட்ரிக் லாக் & அன்லாக்'
        ],
        requiredDocuments_en: [
          'Current Aadhaar Number',
          'Registered Mobile Number (OTP for online updates)',
          'Valid Address Proof (Voter ID, EB Bill, Ration Card, Bank Passbook)',
          'Photo Identity Proof (if name/identity verification needed)'
        ],
        requiredDocuments_ta: [
          'தற்போதைய ஆதார் எண்',
          'ஆதாரில் பதிவு செய்யப்பட்ட மொபைல் எண் (OTP)',
          'சரியான முகவரி ஆதாரம் (வாக்காளர் அட்டை, EB பில், ரேஷன் கார்டு, வங்கி பாஸ்புக்)',
          'புகைப்பட அடையாள சான்று'
        ],
        processingTime_en: 'Instant Print / 3-7 Days for Online Updates',
        processingTime_ta: 'உடனடி பிரிண்ட் / முகவரி மாற்றத்திற்கு 3-7 நாட்கள்',
        steps_en: [
          'Send Aadhaar details & address proof via WhatsApp or walk-in',
          'Verification of supporting proof & verification OTP',
          'Application submission on official UIDAI portal with acknowledgement receipt',
          'Status tracking & PVC card doorstep delivery assistance'
        ],
        steps_ta: [
          'ஆதார் விவரங்கள் & முகவரி ஆதாரத்தை WhatsApp அல்லது கடையில் வழங்குங்கள்',
          'ஆவண சரிபார்ப்பு மற்றும் தேவையான OTP சரிபார்ப்பு',
          'அரசு தளத்தில் விண்ணப்பம் பதிவு செய்யப்பட்டு ரசீது வழங்கப்படும்',
          'விண்ணப்ப நிலை கண்காணிப்பு மற்றும் PVC கார்டு வழிகாட்டல்'
        ],
        faqs: [
          {
            q_en: 'Can Aadhaar address be changed through WhatsApp without visiting?',
            q_ta: 'கடைக்கு நேரில் வராமல் WhatsApp மூலமாக ஆதார் முகவரி மாற்ற முடியுமா?',
            a_en: 'Yes! If your mobile number is already linked to Aadhaar to receive OTP, you can simply send photos of your valid address proof to our WhatsApp (7373188844). We will process the application for you.',
            a_ta: 'ஆம்! உங்கள் ஆதாரில் மொபைல் எண் இணைக்கப்பட்டு OTP வரும் என்றால், முகவரி ஆதாரத்தை எங்கள் வாட்ஸ்அப் (7373188844)-க்கு அனுப்பி நேரில் வராமலேயே விண்ணப்பிக்கலாம்.'
          },
          {
            q_en: 'How long does an Aadhaar PVC card take to arrive?',
            q_ta: 'ஆதார் PVC கார்டு வர எத்தனை நாட்கள் ஆகும்?',
            a_en: 'Official Speed Post UIDAI PVC cards typically arrive at your registered address within 7 to 14 working days.',
            a_ta: 'அரசு ஸ்பீட் போஸ்ட் மூலம் 7 முதல் 14 வேலை நாட்களுக்குள் உங்கள் வீட்டு முகவரிக்கு வந்து சேரும்.'
          }
        ]
      },
      {
        id: 'pan-card',
        categoryId: 'id-documents',
        name_en: 'PAN Card Services',
        name_ta: 'பான் கார்டு சேவைகள்',
        tag_en: 'NSDL / UTI Assistance',
        tag_ta: 'புதிய பான் & திருத்தம்',
        popular: true,
        shortDesc_en: 'New PAN application, corrections, reprint, minor to major, and firm PAN.',
        shortDesc_ta: 'புதிய பான் கார்டு, பெயர்/பிறந்த தேதி திருத்தம், மைனர் பான், காணாமல் போன கார்டு ரீபிரிண்ட்.',
        subServices_en: [
          'New PAN Application (Form 49A)',
          'PAN Correction (Name, Father Name, DOB, Photo, Sign)',
          'Lost / Missing PAN Reprint',
          'Minor PAN Application (Below 18)',
          'Minor to Major PAN Update',
          'Company / Partnership Firm / Trust PAN Card'
        ],
        subServices_ta: [
          'புதிய பான் கார்டு விண்ணப்பம் (படிவம் 49A)',
          'பான் திருத்தம் (பெயர், தந்தை பெயர், பிறந்த தேதி)',
          'தொலைந்துபோன பான் கார்டு ரீபிரிண்ட்',
          'மைனர் பான் கார்டு (18 வயதுக்கு கீழ்)',
          'மைனர் கார்டை மேஜராக மாற்றுதல்',
          'நிறுவனம் / டிரஸ்ட் / தொழில் பான் கார்டு'
        ],
        requiredDocuments_en: [
          'Aadhaar Card (Mandatory)',
          '2 Passport Size Photos (for physical form mode)',
          'Signature on white paper',
          'Existing PAN copy or PAN number (for corrections/reprint)',
          'Parent Aadhaar (for Minor PAN)'
        ],
        requiredDocuments_ta: [
          'ஆதார் அட்டை (முக்கியம்)',
          '2 பாஸ்போர்ட் அளவு போட்டோ',
          'வெள்ளைத்தாளில் கையொப்பம்',
          'பழைய பான் கார்டு நகல் அல்லது எண் (திருத்தங்களுக்கு)',
          'பெற்றோர் ஆதார் (மைனர் பான் கார்டுக்கு)'
        ],
        processingTime_en: 'e-PAN in 2-3 Days, Physical Card in 7-10 Days',
        processingTime_ta: 'இ-பான் 2-3 நாட்களில், ஒரிஜினல் அட்டை 7-10 நாட்களில்',
        steps_en: [
          'Submit Aadhaar photo and details via WhatsApp or store',
          'Select service: New, Correction, Reprint or Minor',
          'Immediate processing and e-Acknowledgement receipt generation',
          'e-PAN sent to your WhatsApp/email, physical card dispatched to your home'
        ],
        steps_ta: [
          'ஆதார் நகல் மற்றும் விவரங்களை வாட்ஸ்அப்பில் அனுப்பவும்',
          'புதியதா, திருத்தமா அல்லது ரீபிரிண்ட்டா என்பதை தேர்வு செய்தல்',
          'உடனடி பதிவு செய்யப்பட்டு ஒப்புகை ரசீது வழங்கப்படும்',
          'இ-பான் உங்கள் வாட்ஸ்அப்பில் வரும், ஒரிஜினல் அட்டை வீட்டுக்கு வரும்'
        ],
        faqs: [
          {
            q_en: 'What if I lost my PAN number and card completely?',
            q_ta: 'எனது பான் எண் மற்றும் அட்டை இரண்டும் தொலைந்துவிட்டது, என்ன செய்வது?',
            a_en: 'Do not worry. Using your Aadhaar details and date of birth, we can retrieve your existing PAN number (UAN/ITD search) and apply for a genuine reprint.',
            a_ta: 'கவலைப்பட வேண்டாம். உங்கள் ஆதார் எண் மற்றும் விவரங்களை வைத்து உங்கள் பழைய பான் எண்ணை கண்டறிந்து ரீபிரிண்ட் பெற்றுத் தருகிறோம்.'
          }
        ]
      },
      {
        id: 'smart-card',
        categoryId: 'id-documents',
        name_en: 'Smart Card (Ration Card)',
        name_ta: 'ஸ்மார்ட் கார்டு (ரேஷன் அட்டை)',
        tag_en: 'TNPDS Services',
        tag_ta: 'டி.என்.பி.டி.எஸ்',
        popular: true,
        shortDesc_en: 'Name addition, removal, address change, family head change, and new card application.',
        shortDesc_ta: 'குடும்ப உறுப்பினர் பெயர் சேர்த்தல், நீக்குதல், முகவரி மாற்றம், குடும்பத் தலைவர் மாற்றம்.',
        subServices_en: [
          'New Smart Card Application',
          'Member Name Addition (Marriage / Child Birth)',
          'Member Name Deletion (Marriage / Death Certificate)',
          'Address / Fair Price Shop Change',
          'Family Head Photo & Name Modification',
          'Smart Card Status & e-Card Printout'
        ],
        subServices_ta: [
          'புதிய குடும்ப அட்டை விண்ணப்பம்',
          'குடும்ப உறுப்பினர் பெயர் சேர்த்தல் (திருமணம்/குழந்தை பிறப்பு)',
          'பெயர் நீக்குதல் (திருமணம்/இறப்பு சான்று மூலம்)',
          'முகவரி & நியாயவிலைக் கடை மாற்றம்',
          'குடும்பத் தலைவர் புகைப்படம் மற்றும் பெயர் மாற்றம்',
          'ஸ்மார்ட் கார்டு நகல் பதிவிறக்கம் & கலர் கார்டு'
        ],
        requiredDocuments_en: [
          'Smart Card number / Registered Mobile Number',
          'Aadhaar cards of all family members',
          'Birth certificate (for child addition) or Marriage certificate',
          'Old ration card or Gas connection receipt (for new application)'
        ],
        requiredDocuments_ta: [
          'தற்போதைய ஸ்மார்ட் கார்டு எண் / பதிவு செய்த மொபைல்',
          'அனைத்து குடும்ப உறுப்பினர்களின் ஆதார் அட்டை',
          'குழந்தை பிறப்பு சான்றிதழ் அல்லது திருமண பத்திரிகை',
          'எரிவாயு இணைப்பு ரசீது & முகவரி ஆதாரம்'
        ],
        processingTime_en: 'Application in 1 hour, Govt approval in 15-30 days',
        processingTime_ta: 'விண்ணப்பம் 1 மணி நேரத்தில் பதிவு, அரசு ஒப்புதல் 15-30 நாட்கள்'
      },
      {
        id: 'voter-id',
        categoryId: 'id-documents',
        name_en: 'Voter ID Services',
        name_ta: 'வாக்காளர் அடையாள அட்டை',
        tag_en: 'ECI Portal',
        tag_ta: 'தேர்தல் ஆணையம்',
        shortDesc_en: 'New voter enrollment (Form 6), address change (Form 8), corrections and EPIC card download.',
        shortDesc_ta: 'புதிய வாக்காளர் பதிவு (படிவம் 6), தொகுதி/முகவரி மாற்றம் (படிவம் 8), EPIC கார்டு பிரிண்ட்.',
        subServices_en: [
          'New Voter Registration (Age 18+)',
          'Voter Card Correction (Name, Age, Relation)',
          'Assembly Constituency Shifting / Address Change',
          'Replacement Voter Card (Lost / Damaged)',
          'EPIC Number Search & Digital Voter Download'
        ],
        subServices_ta: [
          'புதிய வாக்காளர் பதிவு (18 வயது பூர்த்தியானவர்கள்)',
          'வாக்காளர் அட்டை திருத்தம் (பெயர், வயது, உறவுமுறை)',
          'தொகுதி மாற்றம் மற்றும் முகவரி மாற்றம்',
          'தொலைந்த கார்டுக்கு பதிலாக புதிய EPIC அட்டை',
          'வாக்காளர் பட்டியல் பெயர் சரிபார்த்தல் & பதிவிறக்கம்'
        ],
        requiredDocuments_en: ['Aadhaar Card', 'Passport Photo', 'Age Proof (10th marksheet or Birth cert)', 'Family member Voter ID for reference'],
        requiredDocuments_ta: ['ஆதார் அட்டை', 'பாஸ்போர்ட் அளவு போட்டோ', 'வயது சான்று (10ம் வகுப்பு சான்று அல்லது பிறப்பு சான்று)', 'குடும்ப உறுப்பினர் வாக்காளர் அட்டை'],
        processingTime_en: 'Online submission immediate, ECI verification follows',
        processingTime_ta: 'உடனடி விண்ணப்ப பதிவு, தேர்தல் ஆணைய சரிபார்ப்பு'
      },
      {
        id: 'pvc-id-cards',
        categoryId: 'id-documents',
        name_en: 'Synthetic & PVC ID Cards',
        name_ta: 'சிந்தடிக் & PVC பிளாஸ்டிக் கார்டுகள்',
        tag_en: 'High Quality Print',
        tag_ta: 'உயர்தர பிரிண்ட்',
        shortDesc_en: 'Waterproof, tear-proof original grade PVC cards for Aadhaar, PAN, Voter ID, Driving Licence.',
        shortDesc_ta: 'மங்காத, கிழியாத, நீர்ப்புகா தரம் வாய்ந்த ஒரிஜினல் தடிமன் PVC பிளாஸ்டிக் ஐடி கார்டுகள்.',
        subServices_en: [
          'Aadhaar High-Definition PVC Card',
          'PAN Card Direct PVC Print',
          'Driving Licence High-Gloss PVC Card',
          'Voter ID Color Plastic Card',
          'Student / Staff / Corporate ID Cards with Lanyards',
          'Ayushman Bharat Health Card Print'
        ],
        subServices_ta: [
          'ஆதார் அல்ட்ரா எச்டி PVC கார்டு',
          'பான் கார்டு நேரடி PVC பிரிண்ட்',
          'ஓட்டுநர் உரிம பிளாஸ்டிக் கார்டு',
          'வாக்காளர் அடையாள அட்டை பிரிண்ட்',
          'பள்ளி, கல்லூரி, நிறுவன பணியாளர் ஐடி கார்டுகள்',
          'ஆயுஷ்மான் பாரத் மருத்துவ அட்டை'
        ],
        requiredDocuments_en: ['Original PDF file or document copy via WhatsApp'],
        requiredDocuments_ta: ['வாட்ஸ்அப் மூலம் ஆவண PDF அல்லது போட்டோ'],
        processingTime_en: '5 to 15 Minutes Instant Delivery at Store / Courier available',
        processingTime_ta: '5 முதல் 15 நிமிடங்களில் நேரடி டெலிவரி / கொரியர் வசதி'
      }
    ]
  },
  {
    id: 'passport-travel',
    iconName: 'Plane',
    title_en: 'Passport & Travel Services',
    title_ta: 'பாஸ்போர்ட் & பயண சேவைகள்',
    description_en: 'New Passport, Renewal, Tatkal, PCC, Minor, Lost/Damaged, Updates',
    description_ta: 'புதிய பாஸ்போர்ட், ரினீவல், தட்கல், பி.சி.சி, மைனர் பாஸ்போர்ட், திருத்தங்கள்',
    badge: 'Appointment Support',
    services: [
      {
        id: 'passport-new-renewal',
        categoryId: 'passport-travel',
        name_en: 'Passport (New & Renewal)',
        name_ta: 'பாஸ்போர்ட் (புதியது & புதுப்பித்தல்)',
        tag_en: 'Passport Seva Kendra',
        tag_ta: 'பாஸ்போர்ட் சேவை',
        popular: true,
        shortDesc_en: 'End-to-end appointment slot booking, application filling, and document guidance for PSK / POPSK.',
        shortDesc_ta: 'பாஸ்போர்ட் விண்ணப்பம் பூர்த்தி, கட்டணம் செலுத்துதல், கோவை/திருப்பூர் PSK ஸ்லாட் அப்பாயிண்ட்மென்ட்.',
        subServices_en: [
          'Fresh / New Normal Passport (36 / 60 Pages)',
          'Passport Renewal / Expiry Re-issue',
          'Tatkal Emergency Fast-Track Passport',
          'Minor Passport (Children under 18)',
          'Police Clearance Certificate (PCC for Jobs/Visa)',
          'Damaged or Lost Passport Re-issue',
          'Spouse Name Addition / Address Change'
        ],
        subServices_ta: [
          'புதிய பாஸ்போர்ட் விண்ணப்பம் (36 / 60 பக்கங்கள்)',
          'காலாவதியான பாஸ்போர்ட் ரினீவல்',
          'தட்கல் அவசர பாஸ்போர்ட் பதிவு',
          'மைனர் பாஸ்போர்ட் (18 வயதுக்குட்பட்ட குழந்தைகள்)',
          'PCC போலீஸ் கிளியரன்ஸ் சான்றிதழ் (வெளிநாட்டு வேலைக்கு)',
          'தொலைந்த அல்லது சேதமடைந்த பாஸ்போர்ட் ரீ-இஷ்யூ',
          'மனைவி பெயர் சேர்த்தல் & முகவரி மாற்றம்'
        ],
        requiredDocuments_en: [
          'Aadhaar Card (Name, DOB & Address must match)',
          '10th / 12th / Degree Marksheet or School Transfer Certificate (ECNR proof)',
          'PAN Card or Voter ID',
          'Active Bank Passbook with photo (Nationalized bank)',
          'Old Passport (original) for renewal cases'
        ],
        requiredDocuments_ta: [
          'ஆதார் அட்டை (பெயர், பிறந்த தேதி சரியாக இருக்க வேண்டும்)',
          '10ம் வகுப்பு மதிப்பெண் சான்றிதழ் (ECNR தகுதிக்கு)',
          'பான் கார்டு அல்லது வாக்காளர் அட்டை',
          'வங்கி கணக்கு பாஸ்புக் (புகைப்படத்துடன்)',
          'பழைய பாஸ்போர்ட் அசல் (ரினீவல் செய்ய)'
        ],
        processingTime_en: 'Appointment Booking in 24 Hrs, Passport issued after verification',
        processingTime_ta: '24 மணி நேரத்தில் அப்பாயிண்ட்மென்ட், போலீஸ் விசாரணைக்கு பின் பாஸ்போர்ட் வரும்'
      }
    ]
  },
  {
    id: 'vehicle-services',
    iconName: 'Car',
    title_en: 'Vehicle & Driving Services',
    title_ta: 'வாகனம் & ஓட்டுநர் சேவைகள்',
    description_en: 'LLR, Driving Licence, Renewal, Address Change, RC Missing, FC, FASTag, Insurance',
    description_ta: 'எல்.எல்.ஆர், ஓட்டுநர் உரிமம், ரினீவல், முகவரி மாற்றம், ஆர்.சி தொலைந்தது, பாஸ்டேக்',
    badge: 'Parivahan Certified Flow',
    services: [
      {
        id: 'driving-licence',
        categoryId: 'vehicle-services',
        name_en: 'Driving Licence (DL & LLR)',
        name_ta: 'ஓட்டுநர் உரிமம் (DL & LLR)',
        tag_en: 'Parivahan Sarathi',
        tag_ta: 'பரிவாஹன் சேவை',
        popular: true,
        shortDesc_en: 'LLR application, driving licence slot, expired DL renewal, address correction and smart card print.',
        shortDesc_ta: 'எல்.எல்.ஆர் பதிவு, டிரைவிங் லைசென்ஸ் புதுப்பித்தல், முகவரி மாற்றம், பெயர் திருத்தம்.',
        subServices_en: [
          'Learner Licence (LLR - Online Exam Support)',
          'Driving Licence Renewal (Expired DL)',
          'Change of Address in Driving Licence',
          'Name / DOB Correction in Driving Licence',
          'Replacement / Duplicate DL (Lost / Damaged)',
          'Badge / Commercial Licence Endorsement',
          'International Driving Permit (IDP)'
        ],
        subServices_ta: [
          'பழகுநர் உரிமம் (LLR - ஆன்லைன் தேர்வு உதவி)',
          'ஓட்டுநர் உரிமம் ரினீவல் (காலாவதியான லைசென்ஸ்)',
          'ஓட்டுநர் உரிமத்தில் முகவரி மாற்றம்',
          'பெயர் மற்றும் பிறந்த தேதி திருத்தம்',
          'தொலைந்துபோன லைசென்ஸுக்கு டூப்ளிகேட் DL',
          'பேட்ஜ் / வணிக வாகன அனுமதி',
          'சர்வதேச ஓட்டுநர் உரிமம் (IDP)'
        ],
        requiredDocuments_en: [
          'Aadhaar Card with Mobile OTP',
          'Existing Driving Licence copy (for renewal/correction)',
          'Blood Group report',
          'Form 1 & Form 1A Medical Certificate (if age > 40 or commercial)',
          'Passport size photograph & signature'
        ],
        requiredDocuments_ta: [
          'ஆதார் அட்டை (மொபைல் OTP உடன்)',
          'பழைய ஓட்டுநர் உரிமம் நகல் (ரினீவல் செய்ய)',
          'இரத்த வகை (Blood Group) விவரம்',
          'மருத்துவ சான்றிதழ் Form 1A (40 வயதுக்கு மேல் உள்ளவர்களுக்கு)',
          'பாஸ்போர்ட் போட்டோ & கையொப்பம்'
        ],
        processingTime_en: 'Immediate online submission, RTO processing 3-7 days',
        processingTime_ta: 'உடனடி ஆன்லைன் பதிவு, RTO நடைமுறை 3-7 நாட்கள்'
      },
      {
        id: 'rc-vehicle-docs',
        categoryId: 'vehicle-services',
        name_en: 'RC & Vehicle Formalities',
        name_ta: 'ஆர்.சி & வாகன ஆவண சேவைகள்',
        tag_en: 'Vahan Portal',
        tag_ta: 'வாகன் சேவை',
        shortDesc_en: 'RC missing duplicate, Finance (HP) cancellation, FC renewal, and road tax.',
        shortDesc_ta: 'தொலைந்த ஆர்.சி புத்தகம் டூப்ளிகேட், தவணை கடன் ரத்து (Hypothecation Cancel), FC ஃபிக்சிங்.',
        subServices_en: [
          'RC Missing / Duplicate Registration Certificate',
          'Finance Cancellation / HP Termination (NOC)',
          'Ownership Transfer (Sale/Purchase Transfer)',
          'Fitness Certificate (FC) Renewal Application',
          'FASTag Instant Activation & Recharge',
          'Vehicle Insurance (Two Wheeler & Four Wheeler)'
        ],
        subServices_ta: [
          'தொலைந்துபோன ஆர்.சி டூப்ளிகேட் விண்ணப்பம்',
          'ஃபைனான்ஸ் லோன் முடித்தல் (HP Cancellation - NOC)',
          'வாகன பெயர் மாற்றம் (Ownership Transfer)',
          'எஃப்.சி (Fitness Certificate) ரினீவல்',
          'பாஸ்டேக் (FASTag) உடனடி ஆக்டிவேஷன்',
          'இருசக்கர & நான்கு சக்கர வாகன இன்சூரன்ஸ்'
        ],
        requiredDocuments_en: ['Vehicle details / Engine & Chassis No', 'Owner Aadhaar', 'Bank NOC & Form 35 (for loan cancellation)', 'Existing RC copy / Police CSR copy for lost RC'],
        requiredDocuments_ta: ['வாகன எண் மற்றும் விவரங்கள்', 'உரிமையாளர் ஆதார்', 'வங்கி NOC & படிவம் 35 (கடன் ரத்து செய்ய)', 'பழைய RC நகல் / CSR அறிக்கை'],
        processingTime_en: '1-2 Days for filing, RTO inspection as required',
        processingTime_ta: '1-2 நாட்களில் பதிவு'
      }
    ]
  },
  {
    id: 'business-services',
    iconName: 'Briefcase',
    title_en: 'Business & Tax Services',
    title_ta: 'வணிகம் & வரி சேவைகள்',
    description_en: 'GST Registration, Filing, Udyam MSME, FSSAI Food Licence, TDS, Tax',
    description_ta: 'ஜிஎஸ்டி பதிவு, மாத ரிட்டன், உத்யம் எம்.எஸ்.எம்.இ, எப்.எஸ்.எஸ்.ஏ.ஐ உணவு உரிமம், டி.டி.எஸ்',
    badge: 'MSME & Trade',
    services: [
      {
        id: 'gst-services',
        categoryId: 'business-services',
        name_en: 'GST Services',
        name_ta: 'ஜிஎஸ்டி (GST) சேவைகள்',
        tag_en: 'GST Portal Help',
        tag_ta: 'ஜிஎஸ்டி உதவி',
        popular: true,
        shortDesc_en: 'New GST registration, monthly/quarterly GSTR-1, 3B return filing, amendments and cancellation.',
        shortDesc_ta: 'புதிய ஜிஎஸ்டி பதிவு, மாதந்தோறும் ஜிஎஸ்டி ரிட்டர்ன் தாக்கல், திருத்தங்கள் மற்றும் ரத்து.',
        subServices_en: [
          'New GST Registration (Proprietorship, Partnership, Pvt Ltd)',
          'Monthly & Quarterly GST Return Filing (GSTR-1, 3B, CMP-08)',
          'GST Amendment (Address, Mobile, Additional Place of Business)',
          'GST Revocation of Cancelled Registration',
          'GST Cancellation / Surrender Application',
          'Annual Return GSTR-9 Filing Support'
        ],
        subServices_ta: [
          'புதிய GST பதிவு (தனிநபர் தொழில், பார்ட்னர்ஷிப் நிறுவனம்)',
          'மாதாந்திர GST ரிட்டன் தாக்கல் (GSTR-1, 3B)',
          'GST திருத்தம் (முகவரி, மொபைல், புதிய கிளை சேர்த்தல்)',
          'ரத்தான ஜிஎஸ்டியை மீட்டெடுத்தல் (Revocation)',
          'ஜிஎஸ்டி ரத்து / ஒப்படைப்பு விண்ணப்பம்',
          'வருடாந்திர ஜிஎஸ்டி ரிட்டன் தாக்கல்'
        ],
        requiredDocuments_en: [
          'PAN Card & Aadhaar of Business Owner / Partners',
          'Business Address Proof (Rental Agreement + EB Bill / Tax Receipt)',
          'Bank Account Details (Cancelled Cheque or Bank Statement)',
          'Passport Size Photo of Owner',
          'Nature of Business / Goods & Service codes (HSN/SAC)'
        ],
        requiredDocuments_ta: [
          'உரிமையாளரின் பான் கார்டு & ஆதார் அட்டை',
          'வணிக இடத்தின் முகவரி ஆதாரம் (வாடகை ஒப்பந்தம் + EB பில் / வரி ரசீது)',
          'வங்கி கணக்கு விவரம் (கேண்சல் காசோலை அல்லது பாஸ்புக்)',
          'உரிமையாளரின் பாஸ்போர்ட் போட்டோ',
          'செய்யும் தொழில் விவரம் / பொருட்கள் பட்டியல்'
        ],
        processingTime_en: 'Registration in 3-5 Working Days, Returns on Same Day',
        processingTime_ta: 'பதிவு 3-5 வேலை நாட்களில், ரிட்டன் அதே நாளில்'
      },
      {
        id: 'udyam-msme',
        categoryId: 'business-services',
        name_en: 'Udyam / MSME Registration',
        name_ta: 'உத்யம் / MSME குறுந்தொழில் பதிவு',
        tag_en: 'Govt MSME Certificate',
        tag_ta: 'அரசு குறுந்தொழில் சான்று',
        shortDesc_en: 'Free government MSME registration certificate for bank loans, subsidies, and tender eligibility.',
        shortDesc_ta: 'வங்கி கடன்கள், அரசு மானியங்கள் மற்றும் தொழில் சலுகைகளுக்கு தேவையான உத்யம் பதிவு சான்றிதழ்.',
        subServices_en: [
          'New Udyam Registration for Micro, Small & Medium Businesses',
          'Udyam Certificate Download & High-Gloss Print',
          'Udyam Data Update (Turnover, Investment, Address)',
          'Udyam to GST Linking Support'
        ],
        subServices_ta: [
          'புதிய உத்யம் பதிவு (குறு, சிறு, நடுத்தர தொழில்களுக்கு)',
          'உத்யம் சான்றிதழ் பதிவிறக்கம் & கலர் லேமினேஷன் பிரிண்ட்',
          'உத்யம் விவரங்கள் திருத்தம் (முதலீடு, முகவரி மாற்றம்)',
          'வங்கி லோனுக்கான உத்யம் சான்று தயார் செய்தல்'
        ],
        requiredDocuments_en: ['Owner Aadhaar linked to Mobile OTP', 'Owner PAN Card', 'Business Name and Commencement Date', 'Bank Account number and IFSC code'],
        requiredDocuments_ta: ['மொபைல் OTP வசதியுள்ள ஆதார் அட்டை', 'பான் கார்டு', 'வணிகத்தின் பெயர் மற்றும் தொடங்கிய தேதி', 'வங்கி கணக்கு எண் மற்றும் IFSC'],
        processingTime_en: 'Instant Registration / Certificate within 24 Hours',
        processingTime_ta: 'உடனடி பதிவு / 24 மணி நேரத்தில் சான்றிதழ்'
      },
      {
        id: 'fssai-licence',
        categoryId: 'business-services',
        name_en: 'FSSAI Food Licence',
        name_ta: 'FSSAI உணவு பாதுகாப்பு உரிமம்',
        tag_en: 'Food Safety Dept',
        tag_ta: 'உணவு பாதுகாப்பு',
        shortDesc_en: 'Mandatory FSSAI registration & state licence for hotels, tea stalls, bakeries, snacks and food traders.',
        shortDesc_ta: 'ஹோட்டல், பேக்கரி, மளிகைக்கடை, டீக்கடை மற்றும் அனைத்து உணவு வணிகர்களுக்கான கட்டாய உணவு உரிமம்.',
        subServices_en: [
          'Basic FSSAI Registration (Small vendors & food makers)',
          'State FSSAI Food Licence (Mid-level food business)',
          'FSSAI Annual Renewal',
          'FSSAI Modification & Address Change'
        ],
        subServices_ta: [
          'அடிப்படை FSSAI உணவு பதிவு சான்று',
          'மாநில அளவிலான FSSAI உணவு லைசென்ஸ்',
          'வருடாந்திர உணவு உரிமம் புதுப்பித்தல்',
          'உணவு உரிமத்தில் முகவரி திருத்தம்'
        ],
        requiredDocuments_en: ['Owner Photo & Aadhaar', 'Business Address Proof (EB Bill/Rent Deed)', 'Food category list', 'NOC from local municipality/panchayat if applicable'],
        requiredDocuments_ta: ['உரிமையாளர் போட்டோ & ஆதார்', 'தொழில் இட முகவரி ஆதாரம்', 'உணவு பொருட்களின் பட்டியல்'],
        processingTime_en: 'Basic registration in 3-7 Days',
        processingTime_ta: '3 முதல் 7 வேலை நாட்களில்'
      }
    ]
  },
  {
    id: 'employment-pf',
    iconName: 'Users',
    title_en: 'Employment & PF Services',
    title_ta: 'வேலைவாய்ப்பு & பி.எப் (PF) சேவைகள்',
    description_en: 'Employment Registration, UAN Find, PF Advance, Pension, KYC, Life Certificate',
    description_ta: 'வேலைவாய்ப்பு அலுவலக பதிவு, UAN கண்டறிதல், பி.எப் பணம் எடுத்தல், பென்ஷன், ஜீவன் பிரமான்',
    badge: 'Fast Clearance',
    services: [
      {
        id: 'pf-services',
        categoryId: 'employment-pf',
        name_en: 'EPFO / PF Services',
        name_ta: 'பி.எப் (PF & UAN) சேவைகள்',
        tag_en: 'EPFO Assistance',
        tag_ta: 'ஈ.பி.எப்.ஓ உதவி',
        popular: true,
        shortDesc_en: 'UAN finding, UAN activation, PF advance claim Form 31, full settlement Form 19/10C, and KYC update.',
        shortDesc_ta: 'UAN எண் கண்டறிதல், ஆக்டிவேஷன், அவசர PF பணம் எடுத்தல் (Form 31), முழு பணம் & பென்ஷன் பெறுதல்.',
        subServices_en: [
          'UAN Number Retrieval (Missing UAN Find)',
          'UAN Activation & Password Reset Support',
          'PF Advance Withdrawal (Medical, Illness, House construction - Form 31)',
          'Full & Final PF Settlement (Form 19 & 10C after job exit)',
          'PF KYC Update (Bank Account, PAN, Aadhaar seeding)',
          'E-Nomination Filing (Compulsory for claims)',
          'PF Passbook Download & Balance Check'
        ],
        subServices_ta: [
          'தொலைந்த UAN எண்ணை கண்டறிதல்',
          'UAN ஆக்டிவேஷன் & புதிய பாஸ்வேர்ட் அமைத்தல்',
          'அவசர தேவைக்கு PF அட்வான்ஸ் எடுத்தல் (படிவம் 31)',
          'வேலை நின்ற பின் முழு PF பணம் & பென்ஷன் எடுத்தல் (படிவம் 19 & 10C)',
          'KYC பதிவு (வங்கி கணக்கு, பான் கார்டு இணைப்பு)',
          'இ-நாமினேஷன் வாரிசுதாரர் பதிவு செய்தல்',
          'PF பாஸ்புக் பதிவிறக்கம் மற்றும் இருப்பு பார்த்தல்'
        ],
        requiredDocuments_en: [
          'UAN Number or Member ID',
          'Aadhaar Card linked to Mobile (OTP required)',
          'Bank Passbook or Cancelled Cheque (with Name, A/C No, IFSC clearly printed)',
          'PAN Card (if service < 5 years)'
        ],
        requiredDocuments_ta: [
          'UAN எண் அல்லது PF உறுப்பினர் எண்',
          'ஆதார் அட்டை (OTP வரும் மொபைல் எண்)',
          'வங்கி கணக்கு புத்தகம் அல்லது கேன்சல் செக் இலை (பெயர், எண் தெளிவாக இருக்க வேண்டும்)',
          'பான் கார்டு'
        ],
        processingTime_en: 'Online filing in 30 mins, EPFO credit in 7-15 days',
        processingTime_ta: 'விண்ணப்ப பதிவு 30 நிமிடத்தில், வங்கிக்கு பணம் வர 7-15 நாட்கள்'
      },
      {
        id: 'employment-exchange',
        categoryId: 'employment-pf',
        name_en: 'TN Employment Exchange',
        name_ta: 'வேலைவாய்ப்பு அலுவலக பதிவு',
        tag_en: 'TN Employment Dept',
        tag_ta: 'தமிழக வேலைவாய்ப்பு',
        shortDesc_en: 'Online registration, 3-year renewal, and adding new educational qualifications.',
        shortDesc_ta: 'புதிய வேலைவாய்ப்பு பதிவு, 3 ஆண்டுக்கொரு முறை ரினீவல், புதிய கல்வி தகுதி கூடுதல் சேர்த்தல்.',
        subServices_en: [
          'New Employment Registration (10th, 12th, ITI, Diploma, Degree)',
          'Employment Registration Renewal',
          'Adding Additional Educational Qualifications (B.E, M.Sc, B.Ed)',
          'Employment ID Card Print'
        ],
        subServices_ta: [
          'புதிய வேலைவாய்ப்பு பதிவு (10, 12, டிப்ளமோ, பட்டப்படிப்பு)',
          'வேலைவாய்ப்பு அட்டை ரினீவல் (Renewal)',
          'கூடுதல் கல்வி தகுதிகள் சேர்த்தல் (Post Graduation, B.Ed)',
          'வேலைவாய்ப்பு அடையாள அட்டை பிரிண்ட்'
        ],
        requiredDocuments_en: ['Aadhaar Card', 'Educational Marksheets / Provisional Certificate', 'Community Certificate', 'Old Employment Registration Card (for renewal/update)'],
        requiredDocuments_ta: ['ஆதார் அட்டை', 'கல்வி மதிப்பெண் சான்றிதழ்கள்', 'சாதி சான்றிதழ்', 'பழைய வேலைவாய்ப்பு பதிவு அட்டை (ரினீவலுக்கு)'],
        processingTime_en: 'Instant Online Registration & Card Generation',
        processingTime_ta: 'உடனடி பதிவு மற்றும் அடையாள அட்டை வழங்கல்'
      },
      {
        id: 'life-certificate',
        categoryId: 'employment-pf',
        name_en: 'Digital Life Certificate (Jeevan Pramaan)',
        name_ta: 'டிஜிட்டல் வாழ்நாள் சான்றிதழ் (ஜீவன் பிரமான்)',
        tag_en: 'For Pensioners',
        tag_ta: 'ஓய்வூதியதாரர்களுக்கு',
        shortDesc_en: 'Biometric / facial digital life certificate submission for central, state, EPFO and bank pensioners.',
        shortDesc_ta: 'அரசு, தனியார், இ.பி.எப்.ஓ ஓய்வூதியதாரர்கள் ஆண்டுதோறும் சமர்ப்பிக்க வேண்டிய வாழ்நாள் சான்றிதழ்.',
        subServices_en: [
          'Digital Jeevan Pramaan generation with biometric fingerprint',
          'Direct submission to Pension Disbursing Agency (PDA)',
          'Instant acknowledgement slip with Pramaan ID'
        ],
        subServices_ta: [
          'கைரேகை மூலம் உடனடி டிஜிட்டல் ஜீவன் பிரமான் உருவாக்கம்',
          'நேரடியாக ஓய்வூதிய வங்கி/கருவூலத்திற்கு சமர்ப்பித்தல்',
          'உடனடி பிரமான் ஐடி ஒப்புதல் ரசீது'
        ],
        requiredDocuments_en: ['Pensioner Aadhaar Card', 'PPO Number', 'Pension Bank Account Passbook', 'Active Mobile Number'],
        requiredDocuments_ta: ['ஓய்வூதியதாரர் ஆதார் அட்டை', 'PPO எண்', 'பென்ஷன் வங்கி கணக்கு புத்தகம்', 'மொபைல் எண்'],
        processingTime_en: 'Instant within 10 Minutes',
        processingTime_ta: '10 நிமிடங்களில் உடனடி சான்றிதழ்'
      }
    ]
  },
  {
    id: 'property-certificates',
    iconName: 'Home',
    title_en: 'Property & Certificates',
    title_ta: 'சொத்து & அரசு சான்றிதழ்கள்',
    description_en: 'Patta, Chitta, EC, Document Copy, Birth, Death, Legal Heir',
    description_ta: 'பட்டா, சிட்டா, வில்லங்க சான்று (EC), ஆவண நகல், பிறப்பு, இறப்பு, வாரிசு சான்றிதழ்',
    badge: 'Anytime e-Seva',
    services: [
      {
        id: 'patta-chitta-ec',
        categoryId: 'property-certificates',
        name_en: 'Patta / Chitta & EC Services',
        name_ta: 'பட்டா, சிட்டா & வில்லங்க சான்று (EC)',
        tag_en: 'Anytime Revenue / TNREGINET',
        tag_ta: 'வருவாய்த்துறை & பதிவுத்துறை',
        popular: true,
        shortDesc_en: 'View & download verified Patta/Chitta, FMB sketch, TSLR extract and Encumbrance Certificate (EC).',
        shortDesc_ta: 'அரசு முத்திரையுடன் கூடிய பட்டா/சிட்டா, புலப்படம் (FMB), நில வரைபடம் மற்றும் வில்லங்க சான்று (EC).',
        subServices_en: [
          'Patta / Chitta Download (with Govt QR Verification)',
          'Online Encumbrance Certificate (EC - Search from 1975 to Present)',
          'Sub-Division Application Guidance',
          'FMB Map (Field Measurement Book) Download',
          'TSLR Extract (Town Survey Land Register for Municipalities)',
          'Certified Document Copy (Certified Copy of Sale Deed via TNREGINET)'
        ],
        subServices_ta: [
          'அரசு க்யூஆர் சரிபார்ப்புடன் கூடிய பட்டா / சிட்டா நகல்',
          'வில்லங்க சான்று (EC - 1975 முதல் இன்று வரை வில்லங்க விவரம்)',
          'உட்பிரிவு பட்டா மாறுதல் விண்ணப்ப வழிகாட்டல்',
          'FMB புல வரைபடம் பதிவிறக்கம்',
          'நகர நில அளவை பதிவேடு (TSLR நகல்)',
          'பத்திர நகல் (Certified Copy) பதிவுத்துறை மூலம் விண்ணப்பித்தல்'
        ],
        requiredDocuments_en: [
          'District, Taluk, Village Name',
          'Survey Number & Sub-Division Number (or Patta Number)',
          'Document Number, SRO Name & Year (for EC and Certified Document Copy)'
        ],
        requiredDocuments_ta: [
          'மாவட்டம், வட்டம் (தாலுகா), கிராமம்',
          'சர்வே எண் மற்றும் உட்பிரிவு எண் (அல்லது பட்டா எண்)',
          'பத்திர எண், சார் பதிவாளர் அலுவலகம் & வருடம் (EC & பத்திர நகலுக்கு)'
        ],
        processingTime_en: 'Instant Download (10 Mins) / Certified copies 2-4 Days',
        processingTime_ta: 'உடனடி பதிவிறக்கம் (10 நிமிடம்) / சான்றளிக்கப்பட்ட நகல் 2-4 நாட்கள்'
      },
      {
        id: 'birth-death-legal',
        categoryId: 'property-certificates',
        name_en: 'Birth, Death & Legal Heir Certificates',
        name_ta: 'பிறப்பு, இறப்பு & வாரிசு சான்றிதழ்கள்',
        tag_en: 'e-Sevai Portal',
        tag_ta: 'இ-சேவை சான்றிதழ்கள்',
        shortDesc_en: 'Birth certificate, Death certificate download, Community, Income, Nativity and Legal Heir certificate assistance.',
        shortDesc_ta: 'டிஜிட்டல் பிறப்பு, இறப்பு சான்றிதழ், வருமானம், சாதி, இருப்பிடம், மற்றும் வாரிசு சான்றிதழ் விண்ணப்பம்.',
        subServices_en: [
          'Digital Birth Certificate Search & Color Print with QR',
          'Death Certificate Download & Verification',
          'Legal Heir Certificate Application (வாரிசு சான்றிதழ்)',
          'Community Certificate (சாதி சான்றிதழ்)',
          'Income Certificate (வருமான சான்றிதழ்)',
          'Nativity / Residence Certificate (இருப்பிட சான்றிதழ்)',
          'First Graduate Certificate (முதல் பட்டதாரி சான்றிதழ்)'
        ],
        subServices_ta: [
          'அங்கீகரிக்கப்பட்ட டிஜிட்டல் பிறப்பு சான்றிதழ் பிரிண்ட்',
          'இறப்பு சான்றிதழ் தேடுதல் மற்றும் பதிவிறக்கம்',
          'வாரிசு சான்றிதழ் விண்ணப்ப உதவி',
          'சாதி சான்றிதழ்',
          'வருமான சான்றிதழ்',
          'இருப்பிட சான்றிதழ்',
          'முதல் பட்டதாரி சான்றிதழ்'
        ],
        requiredDocuments_en: [
          'Aadhaar card of applicant and parents',
          'Hospital discharge / birth slip (for birth certificate)',
          'Death report / Cremation slip / Doctor note (for death cert)',
          'Ration card, EB bill and Family tree proof (for legal heir)'
        ],
        requiredDocuments_ta: [
          'விண்ணப்பதாரர் மற்றும் பெற்றோர் ஆதார்',
          'மருத்துவமனை ரசீது (பிறப்பு சான்றுக்கு)',
          'இறப்பு அறிக்கை / மயான ரசீது (இறப்பு சான்றுக்கு)',
          'ஸ்மார்ட் கார்டு, குடும்ப உறுப்பினர்கள் ஆதார் (வாரிசு சான்றுக்கு)'
        ],
        processingTime_en: 'Download instant if registered; new applications 7-15 days',
        processingTime_ta: 'ஏற்கனவே பதிவானவை உடனே; புதிய மனுக்கள் 7-15 நாட்கள்'
      }
    ]
  },
  {
    id: 'education-services',
    iconName: 'GraduationCap',
    title_en: 'Education & Exams',
    title_ta: 'கல்வி & தேர்வு சேவைகள்',
    description_en: 'TNPSC, TET, IBPS, RRB, SSC, Hall Tickets, Education Loan',
    description_ta: 'டி.என்.பி.எஸ்.சி, டெட், வங்கி தேர்வுகள், ரயில்வே, ஹால் டிக்கெட், கல்வி கடன்',
    badge: 'Exam Alert',
    services: [
      {
        id: 'tnpsc-exam',
        categoryId: 'education-services',
        name_en: 'Govt Competitive Exam Applications',
        name_ta: 'அரசு போட்டித் தேர்வு விண்ணப்பங்கள்',
        tag_en: 'Online Exam Portal',
        tag_ta: 'தேர்வு விண்ணப்பம்',
        popular: true,
        shortDesc_en: 'TNPSC OTR registration, Group 1, 2, 4, TET, IBPS Bank exams, RRB Railway, SSC and Police recruitment.',
        shortDesc_ta: 'TNPSC ஒருமுறை பதிவு (OTR), குரூப் 4, 2, ஆசிரியர் தகுதி தேர்வு (TET), IBPS வங்கி மற்றும் ரயில்வே தேர்வுகள்.',
        subServices_en: [
          'TNPSC One Time Registration (OTR) Creation & Renewal',
          'TNPSC Group 4, Group 2, Group 1 Online Application',
          'TNTET Teacher Eligibility Test Application',
          'IBPS PO, Clerk, RRB Bank Exam Applications',
          'Railway Recruitment Board (RRB ALP, Technician, NTPC)',
          'Staff Selection Commission (SSC CGL, CHSL, MTS)',
          'TN Police (TNUSRB Constable / Sub-Inspector)',
          'Hall Ticket Download with Color Printout'
        ],
        subServices_ta: [
          'TNPSC ஒருமுறை பதிவு (OTR) உருவாக்குதல் & புதுப்பித்தல்',
          'TNPSC குரூப் 4, குரூப் 2, குரூப் 1 ஆன்லைன் விண்ணப்பம்',
          'TNTET ஆசிரியர் தகுதித் தேர்வு பதிவு',
          'IBPS வங்கி தேர்வுகள் (PO, Clerk)',
          'ரயில்வே தேர்வு வாரியம் (RRB ALP, NTPC)',
          'SSC மத்திய அரசு தேர்வுகள்',
          'தமிழக காவலர் தேர்வு (TNUSRB)',
          'தேர்வு ஹால் டிக்கெட் உடனடி பதிவிறக்கம்'
        ],
        requiredDocuments_en: [
          'Aadhaar Card',
          '10th, 12th & Degree / Diploma Marksheets',
          'Passport Size Photo (with white background & correct dimensions)',
          'Signature on white paper with black ink',
          'Community Certificate',
          'PSTM Certificate (Person Studied in Tamil Medium) if eligible'
        ],
        requiredDocuments_ta: [
          'ஆதார் அட்டை',
          '10, 12 மற்றும் கல்லூரி மதிப்பெண் சான்றிதழ்கள்',
          'வெள்ளை பின்னணியில் உள்ள பாஸ்போர்ட் போட்டோ',
          'கருப்பு மை கையொப்பம்',
          'சாதி சான்றிதழ்',
          'PSTM சான்றிதழ் (தமிழ் வழியில் பயின்ற சான்று - இருந்தால்)'
        ],
        processingTime_en: 'Immediate Online Submission with Payment Confirmation',
        processingTime_ta: 'கட்டண ரசீதுடன் உடனடி விண்ணப்ப பதிவு'
      },
      {
        id: 'education-loan',
        categoryId: 'education-services',
        name_en: 'Education Loan Assistance (Vidya Lakshmi)',
        name_ta: 'கல்வி கடன் வழிகாட்டல் (வித்யா லட்சுமி)',
        tag_en: 'Govt Loan Portal',
        tag_ta: 'அரசு கல்வி கடன்',
        shortDesc_en: 'Online application on government Vidya Lakshmi portal for college/higher studies loans.',
        shortDesc_ta: 'கல்லூரி மற்றும் உயர்கல்வி படிக்கும் மாணவர்களுக்கான மத்திய அரசு வித்யா லட்சுமி கல்விக்கடன் விண்ணப்ப உதவி.',
        subServices_en: [
          'Vidya Lakshmi Portal Student Profile Registration',
          'Bank Loan Application & Scheme Selection',
          'Uploading marksheets, fee structure, admission allotment',
          'Application status tracking and bank coordination guidance'
        ],
        subServices_ta: [
          'வித்யா லட்சுமி போர்ட்டலில் மாணவர் பதிவு',
          'வங்கி மற்றும் கல்விக்கடன் திட்டங்களை தேர்வு செய்தல்',
          'கல்லூரி சேர்க்கை ஆணை & கல்விக் கட்டண பட்டியல் பதிவேற்றம்',
          'விண்ணப்ப நிலை கண்காணிப்பு'
        ],
        requiredDocuments_en: ['College Allotment Order & Fee Structure', '10th, 12th Marksheets', 'Student & Parent Aadhaar + PAN', 'Income Certificate & Bank Statement of parent'],
        requiredDocuments_ta: ['கல்லூரி சேர்க்கை ஆணை & கட்டண விவரம்', 'மதிப்பெண் சான்றிதழ்கள்', 'மாணவர் மற்றும் பெற்றோர் ஆதார், பான்', 'பெற்றோரின் வருமான சான்று & வங்கி கணக்கு புத்தகம்'],
        processingTime_en: '1-2 Days for full portal submission',
        processingTime_ta: '1-2 நாட்களில் போர்ட்டலில் சமர்ப்பிக்கப்படும்'
      }
    ]
  },
  {
    id: 'temple-services',
    iconName: 'Sparkles',
    title_en: 'Temple & Darshan Booking',
    title_ta: 'கோயில் தரிசன முன்பதிவு',
    description_en: 'Sabarimala Virtual Q, TTD Tirupati, Shirdi Sai Baba, Tiruchendur, Temple Room Booking',
    description_ta: 'சபரிமலை விர்ச்சுவல் க்யூ, திருப்பதி தரிசனம், சீரடி, திருச்செந்தூர், தங்கும் அறை புக்கிங்',
    badge: 'Popular',
    services: [
      {
        id: 'temple-darshan',
        categoryId: 'temple-services',
        name_en: 'Temple Online Darshan & Room Booking',
        name_ta: 'கோயில் ஆன்லைன் தரிசனம் & தங்கும் அறை முன்பதிவு',
        tag_en: 'Pilgrimage Portal',
        tag_ta: 'பக்தர்கள் தரிசன சேவை',
        popular: true,
        shortDesc_en: 'Hassle-free online booking for Sabarimala Virtual Q, TTD ₹300 Special Darshan, Shirdi and HR&CE temples.',
        shortDesc_ta: 'சபரிமலை விர்ச்சுவல் க்யூ டோக்கன், திருப்பதி ₹300 சிறப்பு தரிசனம், சீரடி, திருச்செந்தூர் தங்கும் விடுதி முன்பதிவு.',
        subServices_en: [
          'Sabarimala Virtual Queue Slot Booking',
          'TTD Tirupati ₹300 Special Entry Darshan Booking',
          'TTD Accommodation / Room Booking in Tirumala / Tirupati',
          'Shirdi Sai Baba Sansthan Online Darshan & Aarti Pass',
          'Tiruchendur Subramanya Swamy Temple Special Darshan & Room',
          'Palani Murugan Temple Darshan & Winch / Rope Car Token'
        ],
        subServices_ta: [
          'சபரிமலை விர்ச்சுவல் க்யூ டோக்கன் முன்பதிவு',
          'திருப்பதி ₹300 சிறப்பு விரைவு தரிசன டிக்கெட்',
          'திருமலை / திருப்பதி தேவஸ்தான தங்கும் அறை புக்கிங்',
          'சீரடி சாய்பாபா தரிசனம் & ஆரத்தி பாஸ்',
          'திருச்செந்தூர் சுப்பிரமணிய சுவாமி கோயில் தரிசனம் & அறை புக்கிங்',
          'பழனி முருகன் கோயில் தரிசனம் & ரோப் கார் டோக்கன்'
        ],
        requiredDocuments_en: [
          'Aadhaar Card copy for all pilgrims / devotees',
          'Devotee Photo for Sabarimala registration',
          'Contact Mobile number for OTP verification',
          'Travel dates and approximate time preference'
        ],
        requiredDocuments_ta: [
          'பயணம் செய்யும் அனைத்து பக்தர்களின் ஆதார் அட்டை',
          'சபரிமலை பதிவுக்கு புகைப்படம்',
          'OTP பெறுவதற்கான தொடர்பு மொபைல் எண்',
          'பயண தேதி மற்றும் நேரம்'
        ],
        processingTime_en: 'Instant Token Generation based on quota availability',
        processingTime_ta: 'அரசு கோட்டா நேரங்களில் உடனடி டிக்கெட் உறுதி'
      }
    ]
  },
  {
    id: 'ticket-booking',
    iconName: 'Ticket',
    title_en: 'Travel & Ticket Booking',
    title_ta: 'பயண டிக்கெட் முன்பதிவு',
    description_en: 'IRCTC Train Ticket, Bus Ticket (SETC / Omni), Flight Ticket',
    description_ta: 'ரயில் டிக்கெட் (IRCTC), பேருந்து டிக்கெட் (TNSTC / ஆம்னி), விமான டிக்கெட்',
    badge: 'Instant Confirmation',
    services: [
      {
        id: 'travel-tickets',
        categoryId: 'ticket-booking',
        name_en: 'Train, Bus & Flight Ticket Booking',
        name_ta: 'ரயில், பேருந்து & விமான டிக்கெட் புக்கிங்',
        tag_en: 'Instant Booking',
        tag_ta: 'உடனடி புக்கிங்',
        popular: true,
        shortDesc_en: 'Confirmed train reservation, Tatkal railway tickets, government/private sleeper bus, and low-fare flights.',
        shortDesc_ta: 'IRCTC ரயில் டிக்கெட், தட்கல் முன்பதிவு, அரசு மற்றும் தனியார் ஏசி ஸ்லீப்பர் பேருந்து, குறைந்த கட்டண விமான டிக்கெட்.',
        subServices_en: [
          'IRCTC Train Ticket Reservation (Sleeper, 3AC, 2AC, Chair Car)',
          'Tatkal & Premium Tatkal Railway Booking Assistance',
          'TNSTC / SETC Government Bus Ticket Booking',
          'Private Omni Bus AC Sleeper Tickets (RedBus / AbhiBus partner)',
          'Domestic & International Flight Ticket Booking',
          'Train PNR Status & Platform Ticket Support'
        ],
        subServices_ta: [
          'ரயில் முன்பதிவு (ஸ்லீப்பர், 3AC, 2AC, சேர் கார்)',
          'தட்கல் & பிரீமியம் தட்கல் ரயில் டிக்கெட் உதவி',
          'அரசு விரைவு போக்குவரத்து (SETC/TNSTC) பேருந்து டிக்கெட்',
          'தனியார் சொகுசு ஆம்னி பஸ் முன்பதிவு',
          'உள்நாட்டு மற்றும் சர்வதேச விமான டிக்கெட் முன்பதிவு',
          'PNR நிலை மற்றும் கேன்சலேஷன் உதவி'
        ],
        requiredDocuments_en: ['Passenger Names, Age, Gender', 'Berth / Seat Preference', 'Government ID proof of passenger (Aadhaar / Voter ID)', 'Travel Date and Route'],
        requiredDocuments_ta: ['பயணிகள் பெயர், வயது, பாலினம்', 'இருக்கை தேர்வு (Lower/Upper/Side)', 'பயணி அடையாள அட்டை', 'பயண தேதி & வழித்தடம்'],
        processingTime_en: 'Instant Ticket Confirmed Printout & WhatsApp Delivery',
        processingTime_ta: 'உடனடி டிக்கெட் பிரிண்ட் மற்றும் வாட்ஸ்அப்பில் பிடிஎஃப்'
      }
    ]
  },
  {
    id: 'other-services',
    iconName: 'ShieldCheck',
    title_en: 'Insurance, Welfare & Astrology',
    title_ta: 'காப்பீடு, நலவாரியம் & ஜோதிட சேவைகள்',
    description_en: 'Insurance (Health/Vehicle/Life), Tax Payment, Nalavariyam Welfare, Jathagam Print',
    description_ta: 'இன்சூரன்ஸ், வரி செலுத்துதல், தமிழ்நாடு நலவாரியம், ஜாதகம் துல்லிய கணிப்பு & பிரிண்ட்',
    services: [
      {
        id: 'nalavariyam-welfare',
        categoryId: 'other-services',
        name_en: 'TN Construction & Unorganized Workers Welfare Board',
        name_ta: 'தமிழ்நாடு நலவாரிய சேவைகள் (உடலுழைப்பு & கட்டட தொழிலாளர்கள்)',
        tag_en: 'TN Welfare Board',
        tag_ta: 'தொழிலாளர் நலவாரியம்',
        popular: true,
        shortDesc_en: 'New welfare card registration, renewal, marriage assistance, maternity claim, and education assistance.',
        shortDesc_ta: 'புதிய நலவாரிய அட்டை பதிவு, ரினீவல், திருமண உதவித்தொகை, மகப்பேறு மற்றும் கல்வி உதவித்தொகை விண்ணப்பம்.',
        subServices_en: [
          'New Construction Workers Welfare Board Registration (கட்டட தொழிலாளர்)',
          'Manual / Unorganized Workers Board Registration (உடலுழைப்பு தொழிலாளர்)',
          'Annual Welfare Card Renewal',
          'Welfare Board Pension Claim (60 Years Completion)',
          'Education Scholarship & Marriage Financial Assistance Claim',
          'Accidental / Natural Death Assistance'
        ],
        subServices_ta: [
          'புதிய கட்டட தொழிலாளர் நலவாரிய அட்டை பதிவு',
          'உடலுழைப்பு மற்றும் ஓட்டுநர் நலவாரிய பதிவு',
          'நலவாரிய அட்டை புதுப்பித்தல் (Renewal)',
          'மாதாந்திர ஓய்வூதிய விண்ணப்பம் (60 வயது பூர்த்தி)',
          'திருமண நிதியுதவி மற்றும் குழந்தைகளின் கல்வி உதவித்தொகை',
          'இயற்கை மரணம் மற்றும் விபத்து நிவாரண உதவித்தொகை'
        ],
        requiredDocuments_en: [
          'Aadhaar Card',
          'Bank Passbook (Nationalized bank)',
          'Work Certificate / Village Administrative Officer (VAO) Certificate',
          'Nominee details (Aadhaar & Photo)',
          'Ration Card / Smart Card copy'
        ],
        requiredDocuments_ta: [
          'ஆதார் அட்டை',
          'வங்கி பாஸ்புக் நகல்',
          'தொழில் சான்று / VAO கையொப்பமிட்ட சான்று',
          'வாரிசுதாரர் ஆதார் மற்றும் புகைப்படம்',
          'ஸ்மார்ட் கார்டு நகல்'
        ],
        processingTime_en: '1-2 Days for filing, Labour dept approval follows',
        processingTime_ta: '1-2 நாட்களில் பதிவு, தொழிலாளர் துறை சரிபார்ப்பு'
      },
      {
        id: 'insurance-taxes',
        categoryId: 'other-services',
        name_en: 'General Insurance & Utility Tax Payments',
        name_ta: 'இன்சூரன்ஸ் & வரிகள் செலுத்துதல்',
        tag_en: 'Instant Policy',
        tag_ta: 'உடனடி பாலிசி',
        shortDesc_en: 'Bike, car, commercial vehicle insurance, health insurance, property tax and electricity bill payments.',
        shortDesc_ta: 'பைக், கார், லாரி இன்சூரன்ஸ், மருத்துவ காப்பீடு, வீட்டு வரி மற்றும் மின்கட்டணம் செலுத்துதல்.',
        subServices_en: [
          'Two Wheeler Comprehensive / Third Party Insurance (Instant Policy)',
          'Four Wheeler & Commercial Goods Vehicle Insurance',
          'Health / Medical Insurance Plans for Families',
          'Tiruppur Corporation Property Tax / Water Tax Payment',
          'TNEB Electricity Bill Online Payment with Receipt'
        ],
        subServices_ta: [
          'இருசக்கர வாகன இன்சூரன்ஸ் (5 நிமிடத்தில் பாலிசி)',
          'கார் மற்றும் கமர்ஷியல் லாரி இன்சூரன்ஸ்',
          'முழு குடும்ப மருத்துவ காப்பீடு (Health Insurance)',
          'திருப்பூர் மாநகராட்சி சொத்துவரி / குடிநீர் வரி செலுத்துதல்',
          'TNEB மின்சாரக் கட்டணம் செலுத்தி ரசீது பெறுதல்'
        ],
        requiredDocuments_en: ['Vehicle RC book or previous insurance policy', 'Property Tax assessment number / EB Consumer Number'],
        requiredDocuments_ta: ['வாகன ஆர்.சி புக் அல்லது பழைய இன்சூரன்ஸ் பாலிசி', 'வீட்டு வரி ரசீது எண் / EB நுகர்வோர் எண்'],
        processingTime_en: 'Instant within 5 to 10 Minutes',
        processingTime_ta: '5 முதல் 10 நிமிடங்களில் உடனடி ரசீது'
      },
      {
        id: 'jathagam-astrology',
        categoryId: 'other-services',
        name_en: 'Jathagam & Horoscope Computerized Print',
        name_ta: 'ஜாதகம் துல்லிய கணிப்பு & பிரிண்ட்',
        tag_en: 'Vedic Horoscope',
        tag_ta: 'துல்லிய கணிப்பு',
        shortDesc_en: 'Accurate computerized horoscope with Dasa Bukthi, Navamsam, Rasi chart, marriage compatibility in Tamil.',
        shortDesc_ta: 'துல்லியமான திருக்கணித / வாக்கிய கணிப்பு முறை ஜாதகம், தசா புக்தி, நவாம்சம், ராசி கட்டம் மற்றும் திருமணப் பொருத்தம்.',
        subServices_en: [
          'Full Computerized Horoscope Book Print (Tamil / English)',
          'New Born Baby Jathagam with Birth Star & Rasi calculation',
          'Thirumana Porutham (10 Porutham Marriage Matching Check)',
          'Dasa Bukthi Running Period Details Sheet'
        ],
        subServices_ta: [
          'முழுமையான கம்ப்யூட்டர் ஜாதகம் புத்தகம் (தமிழ் வடிவில்)',
          'குழந்தை பிறந்த நேர ஜாதகம் கணித்தல்',
          'திருமணப் பொருத்தம் பார்த்தல் (பத்து பொருத்த அறிக்கை)',
          'தசா புக்தி விபரங்கள் அடங்கிய வண்ணப் புத்தகம்'
        ],
        requiredDocuments_en: ['Date of Birth', 'Exact Time of Birth (AM/PM)', 'Place of Birth (City / District)'],
        requiredDocuments_ta: ['பிறந்த தேதி', 'பிறந்த நேரம் (காலை / மாலை)', 'பிறந்த ஊர் / மாவட்டம்'],
        processingTime_en: '15 Minutes Printout / Sent via WhatsApp PDF',
        processingTime_ta: '15 நிமிடங்களில் கையில் பெறலாம் / வாட்ஸ்அப் பிடிஎஃப்'
      }
    ]
  }
];

export const DEMO_STATUS_RECORDS: ApplicationStatus[] = [
  {
    refNumber: 'SC-2026-PAN402',
    customerName: 'Karthikeyan S.',
    mobile: '98421XXXXX',
    serviceId: 'pan-card',
    serviceName_en: 'PAN Card Correction (Name & DOB)',
    serviceName_ta: 'பான் கார்டு திருத்தம் (பெயர் & பிறந்த தேதி)',
    dateApplied: '14-Mar-2026',
    currentStep: 3,
    statusText_en: 'Processing at NSDL / UTI Headquarters',
    statusText_ta: 'விண்ணப்பம் பரிசீலனையில் உள்ளது (UTI/NSDL)',
    updatedDate: '17-Mar-2026',
    remarks_en: 'Documents verified successfully. e-PAN generated. Physical card dispatched via India Post Speed Post.',
    remarks_ta: 'ஆவணங்கள் சரிபார்க்கப்பட்டது. இ-பான் உருவாக்கப்பட்டது. அசல் அட்டை ஸ்பீட் போஸ்ட் மூலம் அனுப்பப்பட்டுள்ளது.',
    ackNumber: 'NSDL-88291048821'
  },
  {
    refNumber: 'SC-2026-DL891',
    customerName: 'Praveen Kumar M.',
    mobile: '97892XXXXX',
    serviceId: 'driving-licence',
    serviceName_en: 'Driving Licence Renewal & Address Change',
    serviceName_ta: 'ஓட்டுநர் உரிமம் ரினீவல் & முகவரி மாற்றம்',
    dateApplied: '10-Mar-2026',
    currentStep: 4,
    statusText_en: 'Approved by RTO - Ready for Smart Card Dispatch',
    statusText_ta: 'RTO ஒப்புதல் முடிந்தது - அட்டை பிரிண்ட் செய்யப்படுகிறது',
    updatedDate: '16-Mar-2026',
    remarks_en: 'RTO scrutiny completed. Updated driving licence is ready. You can collect the PVC card from our centre or via post.',
    remarks_ta: 'RTO ஒப்புதல் நிறைவு பெற்றது. புதிய ஓட்டுநர் உரிமம் ரெடியாக உள்ளது. கடையில் பெற்றுக்கொள்ளலாம்.',
    ackNumber: 'TN39-2026-003891'
  },
  {
    refNumber: 'SC-2026-PASS11',
    customerName: 'Revathi Murugesan',
    mobile: '94432XXXXX',
    serviceId: 'passport-new-renewal',
    serviceName_en: 'Fresh Normal Passport Application',
    serviceName_ta: 'புதிய பாஸ்போர்ட் விண்ணப்பம்',
    dateApplied: '12-Mar-2026',
    currentStep: 2,
    statusText_en: 'PSK Appointment Confirmed - Document Verification',
    statusText_ta: 'PSK அப்பாயிண்ட்மென்ட் உறுதி செய்யப்பட்டது',
    updatedDate: '15-Mar-2026',
    remarks_en: 'Slot booked at POPSK Tiruppur for 21-Mar-2026, 10:15 AM. Document checklist sent to customer WhatsApp.',
    remarks_ta: 'திருப்பூர் பாஸ்போர்ட் மையத்தில் 21-Mar-2026 அன்று காலை 10:15 மணிக்கு நேரம் புக் செய்யப்பட்டுள்ளது.',
    ackNumber: 'ARN-26-800412891'
  },
  {
    refNumber: 'SC-2026-GST05',
    customerName: 'Shri Ram Tex Textiles',
    mobile: '96291XXXXX',
    serviceId: 'gst-services',
    serviceName_en: 'New GST Registration',
    serviceName_ta: 'புதிய ஜிஎஸ்டி பதிவு',
    dateApplied: '15-Mar-2026',
    currentStep: 2,
    statusText_en: 'Submitted to GST Department - Aadhar Authentication Pending',
    statusText_ta: 'GST துறையில் சமர்ப்பிக்கப்பட்டு ஆதார் சரிபார்ப்பில் உள்ளது',
    updatedDate: '17-Mar-2026',
    remarks_en: 'ARN generated. Aadhaar OTP biometric link verified. Awaiting State GST Officer approval.',
    remarks_ta: 'ARN எண் உருவாக்கப்பட்டது. ஆதார் OTP சரிபார்க்கப்பட்டது. அதிகாரி ஒப்புதலுக்கு காத்திருக்கிறது.',
    ackNumber: 'ARN-AA330326001289P'
  }
];
