import json
import codecs

data = {
  "en": {
    "nav": {
      "home": "Home", "about": "About", "skills": "Skills",
      "projects": "Projects", "experience": "Experience", "contact": "Contact"
    },
    "hero": {
      "greeting": "Hi, I'm",
      "name": "Abdelrhman Elsaid",
      "role": ".NET Backend Developer",
      "tagline": "Building robust RESTful APIs & layered backend architectures.",
      "cta_projects": "View Projects",
      "cta_contact": "Contact Me",
      "cta_cv": "Download CV",
      "stats": [
        { "value": "2+",   "label": "Major Projects" },
        { "value": "100+", "label": "Unit Tests Written" },
        { "value": "5+",   "label": "Architecture Patterns" }
      ]
    },
    "about": {
      "title": "About Me", "subtitle": "Who I am",
      "bio": ".NET Backend Developer with hands-on experience building RESTful APIs using C#, ASP.NET Core, Entity Framework Core, and SQL Server. Experienced in designing layered backend systems using Onion Architecture, N-Tier Architecture, CQRS with MediatR, Repository Pattern, JWT authentication, role-based authorization, and unit testing. Built practical Web API projects including a Hotel Reservation System and an Examination System.",
      "info": [
        { "icon": "📍", "text": "Cairo, Egypt" },
        { "icon": "🎓", "text": "B.Sc. Electronics & Comm Engineering — Mansoura University (2020–2025)" },
        { "icon": "💡", "text": "AI & Prompt Engineering Enthusiast" },
        { "icon": "🌐", "text": "Arabic: Native  |  English: Intermediate" }
      ],
      "stats": [
        { "value": "2+",      "label": "Major Projects",    "gradient": "linear-gradient(135deg,#7C3AED,#A78BFA)" },
        { "value": "100+",    "label": "Unit Tests Written",   "gradient": "linear-gradient(135deg,#10b981,#14b8a6)" },
        { "value": "5+",      "label": "Architecture Patterns", "gradient": "linear-gradient(135deg,#3b82f6,#06b6d4)" },
        { "value": "10+",     "label": "Technologies & Tools", "gradient": "linear-gradient(135deg,#F59E0B,#f97316)" }
      ],
      "languages": [
        { "lang": "Arabic",  "level": "Native" },
        { "lang": "English", "level": "Intermediate" }
      ]
    },
    "skills": {
      "title": "Skills", "subtitle": "Technologies I work with",
      "categories": [
        { "icon": "🖥️", "name": "Back-End",            "items": ["C#","C++","ASP.NET Core Web API","ASP.NET MVC","RESTful APIs","LINQ","ADO.NET"] },
        { "icon": "🗄️", "name": "Database & ORM",      "items": ["SQL Server","Entity Framework Core","Code-First Migrations","SQL"] },
        { "icon": "🏗️", "name": "Architecture",        "items": ["OOP","SOLID Principles","Design Patterns","Onion Architecture","3-Tier Architecture","Repository Pattern","CQRS","MediatR","FluentValidation"] },
        { "icon": "🔒", "name": "Security",            "items": ["JWT Authentication","Refresh Tokens","Role-Based Authorization","Network Security Fundamentals"] },
        { "icon": "🧪", "name": "Testing & Logging",   "items": ["Unit Testing","NUnit","Moq","FluentAssertions","Serilog","Seq"] },
        { "icon": "🔧", "name": "Tools & AI",          "items": ["Git","GitHub","Visual Studio","Postman","Swagger","Trello","LLM API Integration","Prompt Engineering","Structured Outputs"] }
      ]
    },
    "projects": {
      "title": "Projects", "subtitle": "Things I've built",
      "items": [
        {
          "name": "Hotel Reservation System Web API",
          "highlight": "Onion Architecture + CQRS + 82 Unit Tests",
          "desc": "RESTful API for hotel reservation management using Onion Architecture and CQRS with MediatR. Implemented JWT authentication, refresh tokens, custom authorization filters, centralized error handling, and transaction middleware.",
          "tech": ["ASP.NET Core","EF Core","SQL Server","CQRS","MediatR","JWT","NUnit"],
          "github": "https://github.com",
          "demo": None,
          "icon": "🏨"
        },
        {
          "name": "Examination System Web API",
          "highlight": "N-Tier + Identity + 32 Unit Tests",
          "desc": "RESTful API for managing online exams, courses, questions, students, instructors, and grading. Implemented JWT authentication and role-based authorization using ASP.NET Core Identity. Centralized logging using Serilog and Seq.",
          "tech": ["ASP.NET Core","EF Core","SQL Server","Identity","Serilog","AutoMapper"],
          "github": "https://github.com",
          "demo": None,
          "icon": "📝"
        }
      ]
    },
    "experience": {
      "title": "Experience & Training", "subtitle": "My journey",
      "items": [
        {
          "type": "udemy", "icon": "🎓",
          "role": "Practical Prompt Engineering",
          "company": "Frontend Masters",
          "period": "Apr 2026",
          "badge": "Certificate",
          "points": [
            "Advanced LLM API integration and structured outputs.",
            "Learned prompt engineering techniques for optimal AI interaction."
          ]
        },
        {
          "type": "udemy", "icon": "🎓",
          "role": "Backend Development Foundations (C# & SQL)",
          "company": "Programming Advice",
          "period": "Oct 2025",
          "badge": "Certificate",
          "points": [
            "Deep dive into C# fundamentals, OOP, and relational databases.",
            "Built strong foundations for backend systems development."
          ]
        },
        {
          "type": "udemy", "icon": "🎓",
          "role": "Computer Science & Problem Solving (C++)",
          "company": "Programming Advice",
          "period": "Feb 2025",
          "badge": "Certificate",
          "points": [
            "Enhanced analytical and algorithmic problem-solving skills.",
            "Solidified understanding of data structures and logic."
          ]
        },
        {
          "type": "training", "icon": "📚",
          "role": "Bachelor of Engineering (Electronics and Communications)",
          "company": "Mansoura University",
          "period": "2020 – 2025",
          "badge": "Education",
          "points": [
            "Studied core engineering principles and computer science fundamentals.",
            "Graduated with practical experience in team collaboration and project execution."
          ]
        },
        {
          "type": "work", "icon": "💼",
          "role": "Multimedia Director",
          "company": "Luminous MU",
          "period": "Jan 2023 – Jul 2024",
          "badge": "Extracurricular",
          "points": [
            "Recruited and interviewed over 30 new members.",
            "Restructured the media and marketing team to improve operational efficiency."
          ]
        },
        {
          "type": "work", "icon": "💼",
          "role": "Sub-team Leader",
          "company": "IEEE Mansoura Student Branch",
          "period": "Jan 2022 – Dec 2023",
          "badge": "Extracurricular",
          "points": [
            "Managed the end-to-end creation of visual assets for 2 major events.",
            "Led the design sub-team ensuring timely delivery and brand consistency."
          ]
        }
      ]
    },
    "contact": {
      "title": "Contact", "subtitle": "Let's work together",
      "description": "I'm currently open to new opportunities. Feel free to reach out via any of the channels below!",
      "info": [
        { "icon": "✉️", "label": "Email",    "value": "abdelrhman.ahmed.elsaeed@gmail.com", "href": "mailto:abdelrhman.ahmed.elsaeed@gmail.com" },
        { "icon": "📞", "label": "Phone",    "value": "+201068751057",               "href": "tel:+201068751057" },
        { "icon": "📍", "label": "Location", "value": "Cairo, Egypt",                   "href": None }
      ],
      "socials": [
        { "label": "GitHub",    "href": "https://github.com",                  "icon": "github" },
        { "label": "LinkedIn",  "href": "https://linkedin.com",                  "icon": "linkedin" }
      ]
    },
    "footer": { "made": "Made with ❤️ by Abdelrhman Elsaid", "rights": "All rights reserved." }
  },

  "ar": {
    "nav": {
      "home": "الرئيسية", "about": "عني", "skills": "المهارات",
      "projects": "المشاريع", "experience": "الخبرات", "contact": "تواصل"
    },
    "hero": {
      "greeting": "مرحباً، أنا",
      "name": "عبدالرحمن السعيد",
      "role": "مطور واجهات خلفية .NET",
      "tagline": "أبني واجهات برمجة تطبيقات (APIs) قوية ومعماريات خلفية منظمة.",
      "cta_projects": "عرض المشاريع",
      "cta_contact": "تواصل معي",
      "cta_cv": "تحميل السيرة الذاتية",
      "stats": [
        { "value": "+2",   "label": "مشاريع رئيسية" },
        { "value": "+100", "label": "اختبارات برمجية (Unit Tests)" },
        { "value": "+5",   "label": "أنماط معمارية" }
      ]
    },
    "about": {
      "title": "عني", "subtitle": "من أنا",
      "bio": "مطور واجهات خلفية (Backend Developer) بخبرة عملية في بناء واجهات برمجة التطبيقات (RESTful APIs) باستخدام C#, ASP.NET Core, Entity Framework Core، و SQL Server. أمتلك خبرة في تصميم الأنظمة الخلفية متعددة الطبقات باستخدام Onion Architecture, N-Tier Architecture, CQRS، بالإضافة إلى حماية التطبيقات (JWT) والاختبارات البرمجية.",
      "info": [
        { "icon": "📍", "text": "القاهرة، مصر" },
        { "icon": "🎓", "text": "بكالوريوس هندسة الإلكترونيات والاتصالات — جامعة المنصورة (2020–2025)" },
        { "icon": "💡", "text": "مهتم بتقنيات الذكاء الاصطناعي وهندسة الأوامر (Prompt Engineering)" },
        { "icon": "🌐", "text": "العربية: لغة أم  |  الإنجليزية: متوسط" }
      ],
      "stats": [
        { "value": "+2",      "label": "مشاريع رئيسية",    "gradient": "linear-gradient(135deg,#7C3AED,#A78BFA)" },
        { "value": "+100",    "label": "اختبارات برمجية (Unit Tests)",     "gradient": "linear-gradient(135deg,#10b981,#14b8a6)" },
        { "value": "+5",      "label": "أنماط معمارية",     "gradient": "linear-gradient(135deg,#3b82f6,#06b6d4)" },
        { "value": "+10",     "label": "تقنيات وأدوات",     "gradient": "linear-gradient(135deg,#F59E0B,#f97316)" }
      ],
      "languages": [
        { "lang": "العربية",    "level": "لغة أم" },
        { "lang": "الإنجليزية", "level": "متوسط" }
      ]
    },
    "skills": {
      "title": "المهارات", "subtitle": "التقنيات التي أعمل بها",
      "categories": [
        { "icon": "🖥️", "name": "الواجهات الخلفية",          "items": ["C#","C++","ASP.NET Core Web API","ASP.NET MVC","RESTful APIs","LINQ","ADO.NET"] },
        { "icon": "🗄️", "name": "قواعد البيانات",     "items": ["SQL Server","Entity Framework Core","Code-First Migrations","SQL"] },
        { "icon": "🏗️", "name": "المعمارية",          "items": ["OOP","SOLID Principles","Design Patterns","Onion Architecture","3-Tier Architecture","Repository Pattern","CQRS","MediatR","FluentValidation"] },
        { "icon": "🔒", "name": "الأمان والحماية",            "items": ["JWT Authentication","Refresh Tokens","Role-Based Authorization","Network Security Fundamentals"] },
        { "icon": "🧪", "name": "الاختبارات والتسجيل",   "items": ["Unit Testing","NUnit","Moq","FluentAssertions","Serilog","Seq"] },
        { "icon": "🔧", "name": "الأدوات والذكاء الاصطناعي", "items": ["Git","GitHub","Visual Studio","Postman","Swagger","Trello","LLM API Integration","Prompt Engineering","Structured Outputs"] }
      ]
    },
    "projects": {
      "title": "المشاريع", "subtitle": "ما قمت ببنائه",
      "items": [
        {
          "name": "نظام حجز الفنادق Web API",
          "highlight": "Onion Architecture + CQRS + 82 Unit Test",
          "desc": "واجهة برمجة تطبيقات لإدارة حجوزات الفنادق باستخدام Onion Architecture و CQRS. يتضمن حماية باستخدام JWT، فلاتر مخصصة للصلاحيات، معالجة مركزية للأخطاء، وإدارة المعاملات.",
          "tech": ["ASP.NET Core","EF Core","SQL Server","CQRS","MediatR","JWT","NUnit"],
          "github": "https://github.com",
          "demo": None,
          "icon": "🏨"
        },
        {
          "name": "نظام الامتحانات Web API",
          "highlight": "N-Tier + Identity + 32 Unit Test",
          "desc": "واجهة برمجة تطبيقات لإدارة الامتحانات الإلكترونية، المقررات، الطلاب، والمحاضرين، وعمليات التصحيح الآلي. حماية مبنية على الأدوار عبر ASP.NET Core Identity، مع نظام تسجيل أخطاء مركزي.",
          "tech": ["ASP.NET Core","EF Core","SQL Server","Identity","Serilog","AutoMapper"],
          "github": "https://github.com",
          "demo": None,
          "icon": "📝"
        }
      ]
    },
    "experience": {
      "title": "الخبرات والتدريب", "subtitle": "مسيرتي",
      "items": [
        {
          "type": "udemy", "icon": "🎓",
          "role": "هندسة الأوامر التطبيقية (Prompt Engineering)",
          "company": "Frontend Masters",
          "period": "أبريل 2026",
          "badge": "شهادة",
          "points": [
            "دمج متقدم لـ LLM API ومخرجات منظمة.",
            "تعلم تقنيات هندسة الأوامر لتفاعل مثالي مع الذكاء الاصطناعي."
          ]
        },
        {
          "type": "udemy", "icon": "🎓",
          "role": "أساسيات تطوير الواجهات الخلفية (C# & SQL)",
          "company": "Programming Advice",
          "period": "أكتوبر 2025",
          "badge": "شهادة",
          "points": [
            "تعمق في أساسيات C# و OOP وقواعد البيانات العلاقية.",
            "بناء أسس قوية لتطوير الأنظمة الخلفية."
          ]
        },
        {
          "type": "udemy", "icon": "🎓",
          "role": "علوم الحاسب وحل المشكلات (C++)",
          "company": "Programming Advice",
          "period": "فبراير 2025",
          "badge": "شهادة",
          "points": [
            "تحسين المهارات التحليلية والخوارزمية في حل المشكلات.",
            "تعزيز فهم هياكل البيانات والمنطق البرمجي."
          ]
        },
        {
          "type": "training", "icon": "📚",
          "role": "بكالوريوس الهندسة (إلكترونيات واتصالات)",
          "company": "جامعة المنصورة",
          "period": "2020 – 2025",
          "badge": "تعليم",
          "points": [
            "دراسة المبادئ الهندسية وأساسيات علوم الحاسب.",
            "التخرج بخبرة عملية في التعاون ضمن فريق وتنفيذ المشاريع."
          ]
        },
        {
          "type": "work", "icon": "💼",
          "role": "مدير الوسائط المتعددة",
          "company": "Luminous MU",
          "period": "يناير 2023 – يوليو 2024",
          "badge": "أنشطة تطوعية",
          "points": [
            "توظيف ومقابلة أكثر من 30 عضواً جديداً.",
            "إعادة هيكلة فريق الإعلام والتسويق لتحسين الكفاءة التشغيلية."
          ]
        },
        {
          "type": "work", "icon": "💼",
          "role": "قائد فريق فرعي",
          "company": "فرع طلاب IEEE جامعة المنصورة",
          "period": "يناير 2022 – ديسمبر 2023",
          "badge": "أنشطة تطوعية",
          "points": [
            "إدارة عملية إنشاء الأصول البصرية من البداية للنهاية لحدثين رئيسيين.",
            "قيادة فريق التصميم الفرعي لضمان التسليم في الوقت المناسب واتساق الهوية البصرية."
          ]
        }
      ]
    },
    "contact": {
      "title": "تواصل معي", "subtitle": "لنعمل معاً",
      "description": "أنا متاح حالياً لفرص جديدة. تواصل معي عبر أي من القنوات أدناه!",
      "info": [
        { "icon": "✉️", "label": "البريد الإلكتروني", "value": "abdelrhman.ahmed.elsaeed@gmail.com", "href": "mailto:abdelrhman.ahmed.elsaeed@gmail.com" },
        { "icon": "📞", "label": "الهاتف",             "value": "+201068751057",               "href": "tel:+201068751057" },
        { "icon": "📍", "label": "الموقع",             "value": "القاهرة، مصر",                   "href": None }
      ],
      "socials": [
        { "label": "GitHub",    "href": "https://github.com",             "icon": "github" },
        { "label": "LinkedIn",  "href": "https://linkedin.com", "icon": "linkedin" }
      ]
    },
    "footer": { "made": "صُنع بـ ❤️ بواسطة عبدالرحمن السعيد", "rights": "جميع الحقوق محفوظة." }
  }
}

json_str = json.dumps(data, ensure_ascii=False, indent=2).replace('null', 'null')

with codecs.open("d:/Protofolio/js/main.js", "r", "utf-8") as f:
    content = f.read()

import re
new_content = re.sub(r'const DATA = \{.*?\n\};\n', f'const DATA = {json_str};\n', content, flags=re.DOTALL)

with codecs.open("d:/Protofolio/js/main.js", "w", "utf-8") as f:
    f.write(new_content)
