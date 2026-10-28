export const USE_MOCK_DATA = true;

export const mockUsers = [
  {
    id: "u1",
    name: "Sarah Mitchell",
    email: "sarah@example.com",
    role: "memorial_owner",
  },
  {
    id: "u2",
    name: "Dr. James Chen",
    email: "james@pawsclinic.com",
    role: "clinic_admin",
    clinicId: "c1",
  },
  { id: "u3", name: "Admin", email: "admin@pemetery.com", role: "platform_admin" },
  { id: "u4", name: "Emily Ross", email: "emily@example.com", role: "contributor" },
  {
    id: "u5",
    name: "Dr. Lisa Park",
    email: "lisa@gentlevets.com",
    role: "clinic_admin",
    clinicId: "c2",
  },
];

export const mockClinics = [
  {
    id: "c1",
    name: "Paws & Hearts Veterinary",
    email: "info@pawsclinic.com",
    phone: "(555) 123-4567",
    address: "123 Oak Lane, Portland, OR",
    license: "VET-2024-001",
    status: "approved",
    plan: "professional",
    activeLicenses: 50,
    usedLicenses: 23,
    totalMemorials: 156,
  },
  {
    id: "c2",
    name: "Gentle Farewell Vets",
    email: "hello@gentlevets.com",
    phone: "(555) 987-6543",
    address: "456 Elm St, Seattle, WA",
    license: "VET-2024-002",
    status: "approved",
    plan: "starter",
    activeLicenses: 20,
    usedLicenses: 8,
    totalMemorials: 42,
  },
  {
    id: "c3",
    name: "Sunrise Animal Hospital",
    email: "care@sunrisevet.com",
    phone: "(555) 456-7890",
    address: "789 Maple Dr, Denver, CO",
    license: "VET-2024-003",
    status: "pending",
    plan: "enterprise",
    activeLicenses: 100,
    usedLicenses: 0,
    totalMemorials: 0,
  },
];

export const mockMemorials = [
  {
    id: "m1",
    slug: "buddy",
    petName: "Buddy",
    species: "Dog",
    breed: "Golden Retriever",
    birthDate: "2012-03-15",
    passingDate: "2024-11-20",
    ownerId: "u1",
    ownerName: "Sarah Mitchell",
    ownerEmail: "sarah@example.com",
    clinicId: "c1",
    privacy: "public",
    createdAt: "2024-11-21",
    candleCount: 47,
    tearCount: 23,
    memoriesCount: 12,
  },
  {
    id: "m2",
    slug: "luna",
    petName: "Luna",
    species: "Cat",
    breed: "Siamese",
    birthDate: "2015-07-04",
    passingDate: "2025-01-10",
    ownerId: "u1",
    ownerName: "Sarah Mitchell",
    ownerEmail: "sarah@example.com",
    clinicId: "c1",
    privacy: "public",
    createdAt: "2025-01-11",
    candleCount: 31,
    tearCount: 15,
    memoriesCount: 8,
  },
  {
    id: "m3",
    slug: "max",
    petName: "Max",
    species: "Dog",
    breed: "Labrador",
    birthDate: "2010-12-01",
    passingDate: "2024-08-05",
    ownerId: "u4",
    ownerName: "Emily Ross",
    ownerEmail: "emily@example.com",
    clinicId: "c2",
    privacy: "public",
    createdAt: "2024-08-06",
    candleCount: 89,
    tearCount: 45,
    memoriesCount: 22,
  },
  {
    id: "m4",
    slug: "whiskers",
    petName: "Whiskers",
    species: "Cat",
    breed: "Tabby",
    passingDate: "2025-02-01",
    ownerId: "u4",
    ownerName: "Emily Ross",
    ownerEmail: "emily@example.com",
    privacy: "private",
    createdAt: "2025-02-02",
    candleCount: 5,
    tearCount: 3,
    memoriesCount: 2,
  },
  {
    id: "m5",
    slug: "coco",
    petName: "Coco",
    species: "Dog",
    breed: "Poodle",
    birthDate: "2016-05-20",
    passingDate: "2024-12-15",
    ownerId: "u1",
    ownerName: "Sarah Mitchell",
    ownerEmail: "sarah@example.com",
    clinicId: "c1",
    privacy: "public",
    createdAt: "2024-12-16",
    candleCount: 22,
    tearCount: 11,
    memoriesCount: 6,
  },
];

export const mockMemories = [
  {
    id: "mem1",
    memorialId: "m1",
    authorName: "Sarah Mitchell",
    type: "text",
    content:
      "Buddy loved chasing tennis balls in the backyard. Even in his last days, his tail would wag whenever he saw one.",
    visibility: "public",
    createdAt: "2024-11-22",
    isDraft: false,
    images: [
      "https://picsum.photos/seed/buddy1/800/600",
      "https://picsum.photos/seed/buddy2/800/600",
      "https://picsum.photos/seed/buddy3/800/600",
      "https://picsum.photos/seed/buddy4/800/600",
    ],
  },
  {
    id: "mem2",
    memorialId: "m1",
    authorName: "Emily Ross",
    type: "text",
    content:
      "I remember when Buddy would greet me at the door every time I visited. He had the warmest eyes.",
    visibility: "public",
    createdAt: "2024-11-25",
    isDraft: false,
    images: [
      "https://picsum.photos/seed/buddy5/800/600",
      "https://picsum.photos/seed/buddy6/800/600",
      "https://picsum.photos/seed/buddy7/800/600",
    ],
  },
  {
    id: "mem3",
    memorialId: "m2",
    authorName: "Sarah Mitchell",
    type: "text",
    content:
      "Luna would curl up on my lap every evening while I read. The house feels so quiet without her gentle purring.",
    visibility: "public",
    createdAt: "2025-01-12",
    isDraft: false,
    images: [
      "https://picsum.photos/seed/luna1/800/600",
      "https://picsum.photos/seed/luna2/800/600",
      "https://picsum.photos/seed/luna3/800/600",
      "https://picsum.photos/seed/luna4/800/600",
    ],
  },
];

export const mockMoodOptions = [
  { emoji: "😢", label: "Deeply sad" },
  { emoji: "💔", label: "Heartbroken" },
  { emoji: "😔", label: "Missing them" },
  { emoji: "🥺", label: "Tender" },
  { emoji: "😌", label: "Finding peace" },
  { emoji: "💛", label: "Grateful" },
  { emoji: "🌅", label: "Hopeful" },
  { emoji: "😊", label: "Smiling through tears" },
];

export const mockGuidedPrompts = [
  "What's your favorite memory with your pet?",
  "Describe a typical day you shared together.",
  "What did your pet teach you about love?",
  "Write about a time your pet made you laugh.",
  "What would you say to them if you had one more moment?",
  "Describe the special bond you shared.",
  "What was their favorite spot in the house?",
  "How did they comfort you on difficult days?",
  "Write about their quirks that made them unique.",
  "What do you miss most about them?",
  "Describe the first time you met.",
  "What legacy does your pet leave behind?",
];

export const mockEmailTemplates = [
  {
    id: "t1",
    name: "Gentle Condolence",
    subject: "We are thinking of you and {petName}",
    body: "Dear {ownerName},\n\nWe at {clinicName} want you to know that we are thinking of you during this difficult time. {petName} was a beloved companion, and their memory deserves to be cherished.\n\nWe've created a special memorial space where you can honor {petName}'s life and share memories with loved ones.\n\nWith heartfelt sympathy,\n{clinicName}",
  },
  {
    id: "t2",
    name: "Memorial Invitation",
    subject: "A place to remember {petName}",
    body: "Dear {ownerName},\n\nWe've prepared a digital memorial for {petName}. This is a gentle, private space where you can gather memories, photos, and tributes at your own pace.\n\nThere's no rushthis space is always here for you.\n\nWarmly,\n{clinicName}",
  },
  {
    id: "t3",
    name: "One Month Check-in",
    subject: "Thinking of you and {petName}",
    body: "Dear {ownerName},\n\nIt's been about a month since {petName} crossed the rainbow bridge. We hope you're finding moments of peace.\n\nYour memorial space is still here whenever you need it. We've also added some grief support resources that might help.\n\nWith care,\n{clinicName}",
  },
  {
    id: "t4",
    name: "Anniversary Remembrance",
    subject: "Remembering {petName} today",
    body: "Dear {ownerName},\n\nToday marks a year since {petName} passed. We remember them fondly and hope the beautiful memories bring you comfort.\n\nYou can revisit or add to {petName}'s memorial anytime.\n\nWith love,\n{clinicName}",
  },
  {
    id: "t5",
    name: "Aftercare Follow-up",
    subject: "Following up with care for {petName}",
    body: "Dear {ownerName},\n\nWe wanted to gently follow up and let you know that {petName}'s aftercare has been completed with the utmost respect and tenderness.\n\nPlease don't hesitate to reach out if you need anything.\n\nWith deepest sympathy,\n{clinicName}",
  },
];

export const mockResources = [
  {
    id: "r1",
    title: "Understanding Pet Loss Grief",
    category: "Articles",
    url: "#",
    description:
      "Grief after losing a pet is real and valid. Learn about the stages and how to cope.",
    content: `Grief after losing a pet is real and valid. Many people experience profound sadness when saying goodbye to a beloved companion. The bond we share with our pets is unique and meaningful.

Understanding the stages of grief can help you navigate this difficult time. While everyone grieves differently, common stages include denial, anger, bargaining, depression, and acceptance. These don't always occur in order—you may move back and forth between them.

Allow yourself to feel. There's no timeline for grief, and it's okay to cry, to miss them, or to feel their absence keenly. Create space for remembrance: share stories with friends, look at photos, or visit places they loved. Over time, the sharp pain softens, and memories can bring comfort instead of only sadness.`,
  },
  {
    id: "r2",
    title: "Pet Loss Support Hotline",
    category: "Hotlines",
    url: "#",
    description:
      "Free, confidential support available 24/7 from trained counselors.",
    content: `Pet loss hotlines offer free, confidential support 24/7 from trained counselors who understand the depth of losing a beloved animal companion.

Call anytime—day or night. These services are staffed by compassionate professionals who specialize in pet loss grief. You don't need to be in crisis; sometimes it helps just to talk with someone who gets it.

Common hotlines include ASPCA Pet Loss Support, Pet Loss Support Hotline, and various local veterinary school programs. Keep the number handy for moments when you need support.`,
  },
  {
    id: "r3",
    title: "When Children Lose a Pet",
    category: "Family",
    url: "#",
    description:
      "Guidance for helping children understand and process the loss of a pet.",
    content: `Losing a pet can be a child's first experience with death. How we guide them through it can shape their understanding of loss and grief.

Be honest and age-appropriate. Avoid euphemisms like "put to sleep" that can confuse young children. Use clear, gentle language: "Their body stopped working and they died."

Encourage expression. Let them cry, draw pictures, or tell stories about their pet. Create a small ritual—lighting a candle, planting a flower, or writing a letter—to help them say goodbye. Reassure them that it's okay to be sad and that their feelings matter.`,
  },
  {
    id: "r4",
    title: "The Rainbow Bridge Poem",
    category: "Comfort",
    url: "#",
    description: "A beloved poem that brings comfort to many pet owners.",
    content: `Just this side of heaven is a place called Rainbow Bridge. When an animal dies that has been especially close to someone here, that pet goes to Rainbow Bridge. There are meadows and hills for all of our special friends so they can run and play together.

There is plenty of food, water and sunshine, and our friends are warm and comfortable. All the animals who had been ill and old are restored to health and vigor. Those who were hurt or maimed are made whole and strong again, just as we remember them in our dreams of days and times gone by.

The animals are happy and content, except for one small thing; they each miss someone very special to them, who had to be left behind. They all run and play together, but the day comes when one suddenly stops and looks into the distance. His bright eyes are intent. His eager body quivers. Suddenly he begins to run from the group, flying over the green grass, his legs carrying him faster and faster.

You have been spotted, and when you and your special friend finally meet, you cling together in joyous reunion, never to be parted again. The happy kisses rain upon your face; your hands again caress the beloved head, and you look once more into the trusting eyes of your pet, so long gone from your life but never absent from your heart.

Then you cross Rainbow Bridge together...`,
  },
  {
    id: "r5",
    title: "Self-Care During Grief",
    category: "Wellness",
    url: "#",
    description: "Gentle reminders to take care of yourself while grieving.",
    content: `Grief takes a toll on the body and mind. Taking care of yourself isn't selfish—it helps you heal and honor your pet's memory.

Rest when you need to. Grief is exhausting. Allow yourself to sleep, nap, or simply rest without guilt. Eat regularly, even if you don't feel hungry. Simple, nourishing meals help sustain you.

Move gently. A short walk, yoga, or stretching can release tension and improve mood. Don't push yourself—gentle movement is enough. Stay connected with people who understand. Share your feelings with friends, family, or a support group. You don't have to grieve alone.`,
  },
  {
    id: "r6",
    title: "Honoring Your Pet's Memory",
    category: "Memorial Ideas",
    url: "#",
    description:
      "Creative and meaningful ways to honor and remember your companion.",
    content: `Honoring your pet's memory can bring comfort and keep their spirit alive. Here are some meaningful ways to remember them.

Create a memorial: A digital page, photo album, or physical keepsake can become a place you visit when you want to feel close to them. Plant something: A tree, shrub, or garden in their favorite spot honors their love of the outdoors. Donate: Give to an animal shelter or rescue in their name.

Keep a journal: Write down stories, favorite moments, and things you miss. Revisit it when you need to feel connected. Celebrate their birthday or adoption day with a quiet ritual—lighting a candle, visiting their favorite place, or sharing memories with loved ones.`,
  },
];

export const mockFAQ = [
  {
    q: "Is my memorial private?",
    a: "Yes, you control the privacy of your memorial. You can make it public or keep it completely private.",
    category: "privacy",
  },
  {
    q: "Can I invite family members to contribute?",
    a: "Absolutely. You can invite anyone via email to share memories and tributes on your memorial.",
    category: "pet-owners",
  },
  {
    q: "How long does my memorial stay active?",
    a: "Your memorial is preserved for as long as you need it. There is no expiration.",
    category: "pet-owners",
  },
  {
    q: "Can I add photos and videos?",
    a: "Yes, you can upload photos (up to 10MB each) to your memorial and individual memories.",
    category: "pet-owners",
  },
  {
    q: "Is my data safe?",
    a: "We take data privacy very seriously. All data is encrypted and backed up daily. You can request a full export or deletion at any time.",
    category: "privacy",
  },
  {
    q: "How do clinics get started?",
    a: 'Clinics can register through our "For Clinics" page. After a brief approval process, you can start offering digital aftercare to your clients.',
    category: "clinics",
  },
  {
    q: "Do I need a clinic invitation to create a memorial?",
    a: "No. While many owners receive an invitation from their vet, you can also create a memorial directly if your clinic uses Pemetery.",
    category: "pet-owners",
  },
  {
    q: "What payment options do clinics have?",
    a: "We offer monthly and annual billing. Contact us for enterprise pricing and custom solutions.",
    category: "clinics",
  },
];

export const mockLicensePlans = [
  {
    id: "starter",
    name: "Starter",
    price: 49,
    memorials: 20,
    features: [
      "Basic aftercare templates",
      "QR code generation",
      "Email notifications",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    price: 149,
    memorials: 50,
    features: [
      "All Starter features",
      "Custom branding",
      "Analytics dashboard",
      "Priority support",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: 399,
    memorials: "Unlimited",
    features: [
      "All Professional features",
      "API access",
      "Dedicated account manager",
      "Custom integrations",
    ],
  },
];

/* Mock support requests for Support page */
export const mockSupportRequests = [
  {
    id: "sr1",
    subject: "How to add photos to memorial?",
    preview: "I'm trying to upload photos of my late dog but the upload keeps failing. File size is under 10MB.",
    status: "open",
    createdAt: "2025-02-26",
    updatedAt: "2025-02-27",
  },
  {
    id: "sr2",
    subject: "Invite family to memorial",
    preview: "My sister wants to contribute to Luna's memorial. How do I send her an invitation?",
    status: "resolved",
    createdAt: "2025-02-24",
    updatedAt: "2025-02-25",
  },
  {
    id: "sr3",
    subject: "Export data request",
    preview: "I need to export all my memorial data for personal records.",
    status: "in_progress",
    createdAt: "2025-02-25",
    updatedAt: "2025-02-26",
  },
  {
    id: "sr4",
    subject: "Change memorial privacy",
    preview: "I created Buddy's memorial as private. Can I make it public now?",
    status: "resolved",
    createdAt: "2025-02-20",
    updatedAt: "2025-02-21",
  },
];

/* Mock notifications for dashboard header */
export const mockNotifications = [
  { id: "n1", text: "Someone lit a candle for Buddy", time: "2h ago", read: false, icon: "fa-solid fa-fire" },
  { id: "n2", text: "New memory added to Luna's memorial", time: "5h ago", read: false, icon: "fa-solid fa-pen" },
  { id: "n3", text: "Emily Ross accepted your memorial invite", time: "Yesterday", read: true, icon: "fa-solid fa-user-plus" },
  { id: "n4", text: "Your mood check-in streak: 5 days", time: "2 days ago", read: true, icon: "fa-solid fa-heart-pulse" },
];

/* Mock activity feed items for dashboards */
export const mockActivityOwner = [
  {
    id: "a1",
    type: "memory",
    text: "New memory added to Buddy's memorial",
    time: "2h ago",
    icon: "fa-solid fa-pen",
    color: "primary",
  },
  {
    id: "a2",
    type: "candle",
    text: "Someone lit a candle for Luna",
    time: "5h ago",
    icon: "fa-solid fa-fire",
    color: "accent",
  },
  {
    id: "a3",
    type: "journal",
    text: "Journal entry saved",
    time: "Yesterday",
    icon: "fa-solid fa-book",
    color: "primary",
  },
  {
    id: "a4",
    type: "mood",
    text: "Mood check-in completed",
    time: "Yesterday",
    icon: "fa-solid fa-heart-pulse",
    color: "accent",
  },
  {
    id: "a5",
    type: "invite",
    text: "Emily Ross accepted your memorial invite",
    time: "2 days ago",
    icon: "fa-solid fa-user-plus",
    color: "primary",
  },
];

export const mockActivityClinic = [
  {
    id: "c1",
    type: "activation",
    text: "Aftercare sent to Sarah M. for Buddy",
    time: "1h ago",
    icon: "fa-solid fa-paper-plane",
    color: "primary",
  },
  {
    id: "c2",
    type: "memorial",
    text: "New memorial created for Luna",
    time: "3h ago",
    icon: "fa-solid fa-paw",
    color: "primary",
  },
  {
    id: "c3",
    type: "engagement",
    text: "Luna's memorial reached 15 candles",
    time: "5h ago",
    icon: "fa-solid fa-fire",
    color: "accent",
  },
  {
    id: "c4",
    type: "activation",
    text: "Aftercare sent to John D. for Max",
    time: "Yesterday",
    icon: "fa-solid fa-paper-plane",
    color: "primary",
  },
  {
    id: "c5",
    type: "template",
    text: 'Template "Anniversary Remembrance" used 3x',
    time: "2 days ago",
    icon: "fa-solid fa-file-lines",
    color: "accent",
  },
];

export const mockActivityAdmin = [
  {
    id: "ad1",
    type: "clinic",
    text: "Sunrise Animal Hospital requested approval",
    time: "1h ago",
    icon: "fa-solid fa-hospital",
    color: "primary",
  },
  {
    id: "ad2",
    type: "user",
    text: "12 new memorials created today",
    time: "3h ago",
    icon: "fa-solid fa-paw",
    color: "primary",
  },
  {
    id: "ad3",
    type: "backup",
    text: "Nightly backup completed",
    time: "5h ago",
    icon: "fa-solid fa-database",
    color: "accent",
  },
  {
    id: "ad4",
    type: "moderation",
    text: "1 flagged content resolved",
    time: "Yesterday",
    icon: "fa-solid fa-shield",
    color: "accent",
  },
  {
    id: "ad5",
    type: "clinic",
    text: "Gentle Farewell Vets upgraded plan",
    time: "2 days ago",
    icon: "fa-solid fa-arrow-up",
    color: "primary",
  },
];

/* Pet Owner plans - admin-managed, used for Free Tier / memorial tiers */
export const mockPetOwnerPlans = [
  {
    id: "free",
    name: "Free",
    price: 0,
    memorials: 1,
    memories: 10,
    features: [
      "1 memorial page",
      "Up to 10 memories",
      "Grief journal & mood check-ins",
      "Family invitations",
      "Privacy controls",
      "Standard theme",
    ],
    popular: false,
  },
  {
    id: "basic",
    name: "Basic",
    price: 9,
    memorials: 3,
    memories: 50,
    features: [
      "Up to 3 memorials",
      "Up to 50 memories per memorial",
      "All Free features",
      "Custom memorial URL",
      "Photo album (20 photos)",
      "Priority support",
    ],
    popular: false,
  },
  {
    id: "premium",
    name: "Premium",
    price: 19,
    memorials: 10,
    memories: 200,
    features: [
      "Up to 10 memorials",
      "Up to 200 memories each",
      "All Basic features",
      "Video tributes (5 min)",
      "Premium themes",
      "Extended photo storage",
    ],
    popular: true,
  },
  {
    id: "forever",
    name: "Forever",
    price: 49,
    memorials: "Unlimited",
    memories: "Unlimited",
    features: [
      "Unlimited memorials",
      "Unlimited memories",
      "All Premium features",
      "Legacy family access",
      "Print memorial book",
      "Dedicated support",
    ],
    popular: false,
  },
];
