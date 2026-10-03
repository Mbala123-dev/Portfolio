import React from "react";
import HrImg from "../../assests/images/Hr.png";
import CountUp from "react-countup";

const workExperience = [
    {
        role: "Customer Support Intern",
        company: "Zivo, Lagos, Nigeria (Remote)",
        period: "Sep 2026 – Present",
        description:
            "Provide frontline support through live chat and email, manage customer tickets, resolve product and service enquiries, and escalate technical issues to improve service quality."
    },
    {
        role: "Field Data Officer & Technical Enumerator",
        company: "ADATECH Installers, Kano State, Nigeria",
        period: "Jun 2026 – Sep 2026",
        description:
            "Collected GPS, geotagged imagery, meter and customer records; validated field data, supported database synchronization, delivered customer training, and maintained data-quality standards."
    },
    {
        role: "IT Support Technician & Computer Trainer",
        company: "De-Khalid Computer Institute, Jos, Nigeria",
        period: "Feb 2024 – Jul 2024",
        description:
            "Supported computer labs, networks and peripherals; delivered computer-literacy and CBT-readiness training; and maintained systems for reliable training delivery."
    },
    {
        role: "Industrial Trainee — Software Development & Networking",
        company: "Black Innovations Africa (BIA), Jos, Nigeria",
        period: "Sep 2021 – Mar 2022",
        description:
            "Contributed to web development, debugging and testing with PHP, JavaScript and MySQL, while supporting networking operations, IP addressing, router/switch configuration and troubleshooting."
    }
];

const teachingExperience = [
    {
        role: "Mathematics & Computer Studies Teacher | Examination Officer",
        organisation: "Al-Hilal Secondary School, Jos, Plateau State",
        period: "Sep 2026 – Present",
        description:
            "Teach Mathematics and Computer Studies while coordinating examination planning, timetabling, invigilation and result processing."
    },
    {
        role: "Peer Tutor & Academic Mentor",
        organisation: "Faculty of Computing and Mathematical Sciences, ADUST Wudil",
        period: "Jul 2019 – Jan 2024",
        description:
            "Tutored students in Mathematics, Statistics, Algorithms, Data Structures and Net-Centric Computing, while providing academic guidance and practical study support."
    },
    {
        role: "Computer Technology Instructor",
        organisation: "Skynet Information Technology Institute, Jos, Nigeria",
        period: "May 2022 – Nov 2022",
        description:
            "Delivered practical training in MySQL, Excel, Tableau, Power BI, Cisco Packet Tracer, networking fundamentals, and general IT literacy."
    }
];

const volunteerExperience = [
    {
        role: "State Coordinator — Plateau State",
        organisation: "Youth Coalition Against Cancer (YOCAC)",
        period: "Sep 2026 – Present",
        description:
            "Lead cancer-awareness, prevention, advocacy and community-support initiatives across Plateau State."
    },
    {
        role: "SDGs Community Development Service",
        organisation: "National Youth Service Corps (NYSC), Jos",
        period: "Feb 2024 – Feb 2025",
        description:
            "Supported grassroots initiatives and awareness activities related to education, health and environmental sustainability."
    },
    {
        role: "Public Health Volunteer",
        organisation: "Primary Healthcare Center, Gangare Ward",
        period: "2020",
        description:
            "Supported COVID-19 community outreach, health education, household distribution of anti-malarial drugs and mosquito nets, and child immunisation activities."
    }
];

const leadershipExperience = [
    {
        role: "President",
        organisation: "Jos Students' Consultative Forum (JOSCOF), ADUST Wudil",
        description: "Represented student interests at union congress and executive meetings."
    },
    {
        role: "Welfare Officer",
        organisation: "National Association of Computer Science Students (NACOSS), ADUST Wudil Chapter",
        description: "Addressed student welfare concerns and liaised between students and departmental leadership."
    },
    {
        role: "Treasurer",
        organisation: "Independent Electoral Committee, Association of Computing and Mathematical Science Students, ADUST Wudil Chapter",
        description: "Managed budgeting and financial reporting for the student electoral process."
    }
];

const networks = [
    "Royal Statistical Society (RSS)",
    "American Statistical Association (ASA)",
    "American Society for Microbiology (ASM)",
    "American Society of Civil Engineers (ASCE)",
    "AlHuda Centre of Islamic Banking and Economics (CIBE)",
    "Institute for Engineering Research and Publications (IFERP)"
];

const honours = [
    {
        title: "Postgraduate Scholarship Award",
        organisation: "Universitas Andalas, Indonesia",
        description: "Full scholarship covering tuition, accommodation, living expenses, health insurance, language course, visa and travel."
    },
    {
        title: "Dean's List Award for Academic Excellence",
        organisation: "Department of Computer Science, ADUST Wudil",
        description: "Graduated in the top 3% of the class with a CGPA of 4.07/5.00."
    },
    {
        title: "Award of Excellence in Leadership",
        organisation: "Jos Students' Consultative Forum (JOSCOF), ADUST Wudil Chapter",
        description: "Recognised for contributions to association development and the student community."
    },
    {
        title: "Kabiru Custom Foundation Educational Support Award",
        organisation: "Kabiru Custom Foundation",
        description: "Educational support awarded in recognition of academic performance and merit."
    },
    {
        title: "ASUU Award for Excellence — AWBIS Project",
        organisation: "ASUU, ADUST Wudil Chapter",
        description: "Recognised for designing and developing the ASUU Web-Based Information System, later adopted for real-world use."
    }
];

const conferences = [
    {
        title: "4th International School on Modeling and Analytics",
        organisation: "Federal University Oye-Ekiti (FUOYE)",
        description: "Three-week international summer course focused on modeling and analytics."
    },
    {
        title: "5th International Conference on Advanced Science and Engineering (ICOASE 2025)",
        organisation: "Presenter",
        description: "Presented research on machine learning for forecasting social media advocacy success."
    },
    {
        title: "International Summer Course on Ecotourism, Nature Conservation & Food Security",
        organisation: "IPB University, Indonesia",
        description: "Completed an international programme covering biodiversity, sustainable ecosystems and food security."
    },
    {
        title: "360 CARLA Career Symposium in Photonics",
        organisation: "Grenoble, France",
        description: "Participated in an international career symposium covering academic and industry perspectives in photonics."
    },
    {
        title: "Defining Research and Innovation Strategy for Excellence",
        organisation: "Maryam Abacha American University of Nigeria",
        description: "Participated in an international workshop on research and innovation strategy."
    },
    {
        title: "NUNI International Seminar Series #10",
        organisation: "Virtual",
        description: "Participated in a seminar examining educational initiatives supporting the Sustainable Development Goals in Vietnam."
    },
    {
        title: "Professional Seminars in Research and Statistical Methods",
        organisation: "Instats / Institute for Statistical and Data Science",
        description: "Training in StatKey, research design, science writing and statistics-focused professional development."
    },
    {
        title: "Research Methodology and Scientific Writing",
        organisation: "Maryam Abacha American University of Nigeria",
        description: "Professional workshop focused on research methodology and scientific writing."
    },
    {
        title: "Identifying Research Gaps and Researchable Areas in Computing",
        organisation: "Kano State Young Researchers Forum",
        description: "Professional workshop focused on identifying research gaps and developing researchable computing topics."
    }
];

const publications = [
    {
        title:
            "Trust-Aware Federated Learning for Heart Disease Prediction with Integrated Verification, Dynamic Trust Modeling, and Blockchain-Based Auditability",
        details: "Under review at SN Computer Science (Springer), 2026",
        authors: "Bala Muhammad Muhammad"
    },
    {
        title:
            "Automating Numerical Method Selection Using Deterministic Finite Automata in a Compiler-Based Framework",
        details: "Muhammad, B. M., & Bahri, S. (2026). Journal of Computational Innovation and Analytics (JCIA), 5(2).",
        authors: ""
    },
    {
        title: "Harnessing Machine Learning to Forecast Social Media Advocacy Success",
        details: "BM Muhammad, AA Lawan, AS Abdi. Al-Rafidain Journal of Computer Sciences and Mathematics, 20(1), 53–63 (2026).",
        authors: ""
    },
    {
        title: "Design and Implementation of a Web-Based Lecture Timetable Scheduling System",
        details: "S. Abubakar, M.K. Dauda, M.A. Musa, B.M. Muhammad (2026). Journal of Informatics and Web Engineering, 5(1).",
        authors: ""
    },
    {
        title: "Predictive Modeling of Student Career Pathways Using Machine Learning Techniques",
        details: "BM Muhammad, AA Lawan, J Bala, TS Abdulrauf, IM Bala. Journal of Statistical Sciences and Computational Intelligence, 1(3), 166–174 (2025).",
        authors: ""
    },
    {
        title: "Design and Implementation of a Web-Based Information System for University Staff Union",
        details: "BM Muhammad, AA Lawan, & SM Abdulrahman (2024). Journal of Computational Innovation and Analytics, 3(2), 89–109.",
        authors: ""
    },
    {
        title: "Smart Technology Integration: SHM and BIM for Preventing Building Collapses",
        details: "IM Bala et al. African Journal of Advances in Science and Technology Research, 17(1) (2024).",
        authors: ""
    },
    {
        title: "Investigating the Long-run Relationship between Public Debt and Economic Growth: Evidence from Mali",
        details: "Tidiane G. & BM Muhammad. Frontiers in Business and Economics, 3(3), 199–210 (2024).",
        authors: ""
    }
];

const skillGroups = [
    {
        title: "Programming & Development",
        skills: "Java · Python · C · C# · JavaScript · SQL · TypeScript · HTML/CSS · LaTeX"
    },
    {
        title: "Machine Learning & Data Science",
        skills: "TensorFlow · Keras · PyTorch · Scikit-learn · NumPy · Pandas · OpenCV"
    },
    {
        title: "Web Development",
        skills: "Spring Boot · Angular · Node.js · React · Flask · Django"
    },
    {
        title: "Databases & Cloud",
        skills: "MySQL · MongoDB · Oracle · PostgreSQL · DynamoDB · Redis · AWS · Azure · GCP"
    },
    {
        title: "DevOps & Engineering",
        skills: "Docker · Kubernetes · Git · Terraform · JUnit · Mockito · Selenium · Cypress"
    },
    {
        title: "Networking & Geospatial",
        skills: "Cisco Packet Tracer · Wireshark · ArcGIS · QGIS"
    },
    {
        title: "Analytics & Visualization",
        skills: "Tableau · Matplotlib · Seaborn · Power BI · SAS Studio"
    },
    {
        title: "Research & Collaboration",
        skills: "Mendeley · Zotero · Problem Solving · Leadership · Team Collaboration · Communication · Time Management"
    }
];

const Hero = () => {
    /*
     * PROFILE LINKS — replace the placeholder URLs below with your actual profiles.
     * Keeping them in one place makes future updates quick and safe.
     */
    const profileLinks = {
        researchGate: "https://www.researchgate.net/profile/Muhammad-Bala-12",
        googleScholar: "https://scholar.google.com/citations?hl=en&user=Fr3PUysAAAAJ",
        linkedin: "https://www.linkedin.com/in/balamm1",
        whatsapp: "https://wa.me/2349037280169"
    };

    const contactEmail = "muhammadbala466@gmail.com";

    const renderTimeline = (items, showPeriod = true) => (
        <div className="space-y-5">
            {items.map((item, index) => (
                <article
                    key={index}
                    className="relative border-l-2 border-primaryColor/40 dark:border-blue-500/50 pl-5 pb-1"
                >
                    <span className="absolute -left-[6px] top-1.5 h-2.5 w-2.5 rounded-full bg-primaryColor dark:bg-blue-400" />
                    <h4 className="text-headingColor dark:text-white font-[700] text-[14px] sm:text-[15px]">
                        {item.role || item.title}
                    </h4>
                    <p className="text-primaryColor dark:text-blue-400 text-[13px] font-[600] mt-0.5">
                        {item.company || item.organisation}
                    </p>
                    {showPeriod && item.period && (
                        <p className="text-smallTextColor dark:text-gray-500 text-[12px] mt-0.5">
                            {item.period}
                        </p>
                    )}
                    {item.description && (
                        <p className="text-headingColor dark:text-gray-300 text-[13px] leading-6 mt-1.5">
                            {item.description}
                        </p>
                    )}
                </article>
            ))}
        </div>
    );

    return (
        <section
            className="pt-0 bg-white dark:bg-gray-900 transition-colors duration-300"
            id="about"
        >
            <div className="container pt-2">
                <div className="md:flex items-start justify-between gap-8">
                    {/* ======= Main profile content ======= */}
                    <div className="w-full md:basis-1/2">
                        <h5
                            data-aos="fade-right"
                            data-aos-duration="1500"
                            className="text-headingColor dark:text-gray-200 font-[600] text-[15px]"
                        >
                            Hello, welcome
                        </h5>

                        <h1
                            data-aos="fade-up"
                            data-aos-duration="1500"
                            className="text-headingColor dark:text-white font-[600] text-[1.6rem] sm:text-[20px] leading-[20px] sm:leading-[33px] mt-5"
                        >
                            I&apos;m Bala Muhammad Muhammad, <br />
                            Applied Mathematician &amp; Computer Scientist | Researcher |
                            Building Data-Driven Technology for Sustainable Development
                        </h1>

                        <div
                            data-aos="fade-up"
                            data-aos-duration="1800"
                            data-aos-delay="200"
                            className="flex flex-wrap items-center gap-4 mt-7"
                        >
                            <a href="/cv.pdf" download="Bala_Muhammad_Muhammad_CV.pdf">
                                <button className="bg-primaryColor dark:bg-blue-600 text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor dark:hover:bg-blue-700 transition-colors duration-300 py-2 px-4 rounded-[8px]">
                                    <i className="ri-file-download-line" /> Download CV
                                </button>
                            </a>
                            <a
                                href="#contact"
                                className="text-smallTextColor dark:text-gray-300 font-[600] text-[16px] border-b border-solid border-smallTextColor dark:border-gray-400 hover:text-primaryColor dark:hover:text-blue-400 transition-colors duration-200"
                            >
                                Contact Me
                            </a>
                        </div>

                        <p
                            data-aos="fade-left"
                            data-aos-duration="1500"
                            className="flex gap-2 text-headingColor dark:text-gray-300 mt-8 font-[500] text-[14px] leading-7"
                        >
                            <span className="shrink-0 mt-1">
                                <i className="ri-apps-2-line" />
                            </span>
                            <span>
                                Applied Mathematician and Computer Scientist with an MSc in
                                Mathematics and a BSc in Computer Science. Research interests
                                include mathematical modelling, machine learning, computational
                                systems and data-driven solutions for sustainable development.
                            </span>
                        </p>

                        <div className="flex items-center gap-6 mt-8">
                            <span className="text-smallTextColor dark:text-gray-300 text-[15px] font-[600]">
                                Connect:
                            </span>
                            <a
                                href={profileLinks.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                                className="text-smallTextColor dark:text-gray-300 hover:text-primaryColor dark:hover:text-blue-400 text-[19px] transition-colors"
                            >
                                <i className="ri-linkedin-box-fill" />
                            </a>
                            <a
                                href={profileLinks.whatsapp}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="WhatsApp"
                                className="text-smallTextColor dark:text-gray-300 hover:text-primaryColor dark:hover:text-blue-400 text-[19px] transition-colors"
                            >
                                <i className="ri-whatsapp-line" />
                            </a>
                            <a
                                href={`mailto:${contactEmail}`}
                                aria-label="Email"
                                className="text-smallTextColor dark:text-gray-300 hover:text-primaryColor dark:hover:text-blue-400 text-[19px] transition-colors"
                            >
                                <i className="ri-mail-line" />
                            </a>
                        </div>

                        {/* ======= Work Experience ======= */}
                        <section data-aos="fade-up" data-aos-duration="1200" className="mt-12">
                            <h3 className="text-headingColor dark:text-white font-[700] text-[18px] sm:text-[20px] flex items-center gap-2 mb-5">
                                <i className="ri-briefcase-line text-primaryColor dark:text-blue-400" />
                                Work Experience
                            </h3>
                            {renderTimeline(workExperience)}
                        </section>

                        {/* ======= Teaching & Mentoring ======= */}
                        <section data-aos="fade-up" data-aos-duration="1200" className="mt-12">
                            <h3 className="text-headingColor dark:text-white font-[700] text-[18px] sm:text-[20px] flex items-center gap-2 mb-5">
                                <i className="ri-presentation-line text-primaryColor dark:text-blue-400" />
                                Teaching &amp; Mentoring Experience
                            </h3>
                            {renderTimeline(teachingExperience)}
                        </section>

                        {/* ======= Leadership ======= */}
                        <section data-aos="fade-up" data-aos-duration="1200" className="mt-12">
                            <h3 className="text-headingColor dark:text-white font-[700] text-[18px] sm:text-[20px] flex items-center gap-2 mb-5">
                                <i className="ri-user-star-line text-primaryColor dark:text-blue-400" />
                                Leadership Experience
                            </h3>
                            {renderTimeline(
                                leadershipExperience.map((item) => ({
                                    ...item,
                                    period: null
                                })),
                                false
                            )}
                        </section>

                        {/* ======= Volunteer Experience ======= */}
                        <section data-aos="fade-up" data-aos-duration="1200" className="mt-12">
                            <h3 className="text-headingColor dark:text-white font-[700] text-[18px] sm:text-[20px] flex items-center gap-2 mb-5">
                                <i className="ri-heart-3-line text-primaryColor dark:text-blue-400" />
                                Volunteer Experience
                            </h3>
                            {renderTimeline(volunteerExperience)}
                        </section>

                        {/* ======= Networks & Memberships ======= */}
                        <section data-aos="fade-up" data-aos-duration="1200" className="mt-12">
                            <h3 className="text-headingColor dark:text-white font-[700] text-[18px] sm:text-[20px] flex items-center gap-2 mb-5">
                                <i className="ri-global-line text-primaryColor dark:text-blue-400" />
                                Networks &amp; Memberships
                            </h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {networks.map((network, index) => (
                                    <div
                                        key={index}
                                        className="group bg-gray-50 dark:bg-gray-800/70 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-[13px] text-headingColor dark:text-gray-300 hover:border-primaryColor/50 hover:-translate-y-0.5 transition-all duration-200"
                                    >
                                        <i className="ri-checkbox-circle-line text-primaryColor dark:text-blue-400 mr-2" />
                                        {network}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* ======= Publications ======= */}
                        <section data-aos="fade-up" data-aos-duration="1200" className="mt-12" id="publications">
                            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-5">
                                <div>
                                    <h3 className="text-headingColor dark:text-white font-[700] text-[18px] sm:text-[20px] flex items-center gap-2">
                                        <i className="ri-book-open-line text-primaryColor dark:text-blue-400" />
                                        Publications
                                    </h3>
                                    <p className="text-smallTextColor dark:text-gray-400 text-[12px] mt-1">
                                        Selected research publications and manuscripts
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    <a
                                        href={profileLinks.researchGate}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 rounded-lg border border-gray-200 dark:border-gray-700 px-3 py-2 text-[12px] font-[600] text-headingColor dark:text-gray-200 hover:border-primaryColor hover:text-primaryColor dark:hover:text-blue-400 transition-colors"
                                    >
                                        <i className="ri-flask-line" /> ResearchGate
                                    </a>
                                    <a
                                        href={profileLinks.googleScholar}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 rounded-lg border border-gray-200 dark:border-gray-700 px-3 py-2 text-[12px] font-[600] text-headingColor dark:text-gray-200 hover:border-primaryColor hover:text-primaryColor dark:hover:text-blue-400 transition-colors"
                                    >
                                        <i className="ri-graduation-cap-line" /> Google Scholar
                                    </a>
                                </div>
                            </div>

                            <div className="space-y-3">
                                {publications.map((publication, index) => (
                                    <article
                                        key={index}
                                        className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50/70 dark:bg-gray-800/50 p-4 hover:border-primaryColor/50 transition-colors"
                                    >
                                        <h4 className="text-headingColor dark:text-white font-[700] text-[13px] sm:text-[14px] leading-5">
                                            {publication.title}
                                        </h4>
                                        {publication.authors && (
                                            <p className="text-smallTextColor dark:text-gray-400 text-[12px] mt-1">
                                                {publication.authors}
                                            </p>
                                        )}
                                        <p className="text-smallTextColor dark:text-gray-400 text-[12px] leading-5 mt-1.5">
                                            {publication.details}
                                        </p>
                                    </article>
                                ))}
                            </div>
                        </section>

                        {/* ======= Honours & Awards ======= */}
                        <section data-aos="fade-up" data-aos-duration="1200" className="mt-12">
                            <h3 className="text-headingColor dark:text-white font-[700] text-[18px] sm:text-[20px] flex items-center gap-2 mb-5">
                                <i className="ri-award-line text-primaryColor dark:text-blue-400" />
                                Honours &amp; Awards
                            </h3>

                            <div className="space-y-3">
                                {honours.map((award, index) => (
                                    <article
                                        key={index}
                                        className="rounded-xl border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-800/40"
                                    >
                                        <h4 className="text-headingColor dark:text-white font-[700] text-[13px]">
                                            {award.title}
                                        </h4>
                                        <p className="text-primaryColor dark:text-blue-400 text-[12px] font-[600] mt-1">
                                            {award.organisation}
                                        </p>
                                        <p className="text-headingColor dark:text-gray-300 text-[12px] leading-5 mt-1">
                                            {award.description}
                                        </p>
                                    </article>
                                ))}
                            </div>
                        </section>

                        {/* ======= Conferences, Seminars & Workshops ======= */}
                        <section data-aos="fade-up" data-aos-duration="1200" className="mt-12">
                            <h3 className="text-headingColor dark:text-white font-[700] text-[18px] sm:text-[20px] flex items-center gap-2 mb-5">
                                <i className="ri-presentation-fill text-primaryColor dark:text-blue-400" />
                                Conferences, Seminars &amp; Workshops
                            </h3>
                            {renderTimeline(
                                conferences.map((item) => ({
                                    role: item.title,
                                    organisation: item.organisation,
                                    description: item.description,
                                    period: null
                                })),
                                false
                            )}
                        </section>

                        {/* ======= Skills ======= */}
                        <section data-aos="fade-up" data-aos-duration="1200" className="mt-12" id="skills">
                            <h3 className="text-headingColor dark:text-white font-[700] text-[18px] sm:text-[20px] flex items-center gap-2 mb-5">
                                <i className="ri-code-s-slash-line text-primaryColor dark:text-blue-400" />
                                Skills
                            </h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {skillGroups.map((group, index) => (
                                    <div
                                        key={index}
                                        className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60 p-4"
                                    >
                                        <h4 className="text-headingColor dark:text-white font-[700] text-[13px] mb-2">
                                            {group.title}
                                        </h4>
                                        <p className="text-smallTextColor dark:text-gray-400 text-[12px] leading-5">
                                            {group.skills}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* ======= Contact ======= */}
                        <section
                            data-aos="fade-up"
                            data-aos-duration="1200"
                            className="mt-12 mb-10 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6"
                            id="contact"
                        >
                            <h3 className="text-headingColor dark:text-white font-[700] text-[18px] sm:text-[20px] flex items-center gap-2">
                                <i className="ri-mail-send-line text-primaryColor dark:text-blue-400" />
                                Contact
                            </h3>
                            <p className="text-smallTextColor dark:text-gray-400 text-[13px] leading-6 mt-2">
                                For research collaboration, teaching opportunities, technical
                                projects, speaking engagements or professional enquiries, feel
                                free to get in touch.
                            </p>

                            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-5">
                                <a
                                    href={`mailto:${contactEmail}`}
                                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-primaryColor dark:bg-blue-600 text-white px-4 py-2.5 text-[13px] font-[600] hover:opacity-90 transition-opacity"
                                >
                                    <i className="ri-mail-line" />
                                    {contactEmail}
                                </a>
                                <a
                                    href={profileLinks.linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 dark:border-gray-600 text-headingColor dark:text-gray-200 px-4 py-2.5 text-[13px] font-[600] hover:border-primaryColor hover:text-primaryColor dark:hover:text-blue-400 transition-colors"
                                >
                                    <i className="ri-linkedin-box-fill" />
                                    LinkedIn
                                </a>
                                <a
                                    href={profileLinks.whatsapp}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 dark:border-gray-600 text-headingColor dark:text-gray-200 px-4 py-2.5 text-[13px] font-[600] hover:border-primaryColor hover:text-primaryColor dark:hover:text-blue-400 transition-colors"
                                >
                                    <i className="ri-whatsapp-line" />
                                    WhatsApp
                                </a>
                            </div>

                            <p className="text-smallTextColor dark:text-gray-500 text-[11px] mt-4">
                
                            </p>
                        </section>
                    </div>

                    {/* ======= Profile image ======= */}
                    <div className="basis-1/3 mt-10 sm:mt-0 self-start md:sticky md:top-24">
                        <figure className="flex items-center justify-center rounded-full">
                            <img src={HrImg} alt="Bala Muhammad Muhammad" className="rounded-[50px]" />
                        </figure>
                    </div>

                    {/* ======= Profile statistics ======= */}
                    <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-start md:text-end self-start">
                        <div className="mb-8">
                            <h2 className="text-headingColor dark:text-white font-[700] text-[24px] md:text-[32px]">
                                <CountUp start={0} end={7} duration={2} suffix="+" />
                            </h2>
                            <h4 className="text-headingColor dark:text-gray-300 font-[600] text-[14px] md:text-[16px]">
                                Years of Academic &amp; Professional Engagement
                            </h4>
                        </div>

                        <div className="mb-8">
                            <h2 className="text-headingColor dark:text-white font-[700] text-[24px] md:text-[32px]">
                                <CountUp start={0} end={8} duration={2} />
                            </h2>
                            <h4 className="text-headingColor dark:text-gray-300 font-[600] text-[14px] md:text-[16px]">
                                Publications
                            </h4>
                        </div>

                        <div className="mb-8">
                            <h2 className="text-headingColor dark:text-white font-[700] text-[24px] md:text-[32px]">
                                <CountUp start={0} end={6} duration={2} />
                            </h2>
                            <h4 className="text-headingColor dark:text-gray-300 font-[600] text-[14px] md:text-[16px]">
                                Professional Networks
                            </h4>
                        </div>

                        <div className="mb-8">
                            <h2 className="text-headingColor dark:text-white font-[700] text-[24px] md:text-[32px]">
                                <CountUp start={0} end={3} duration={2} />
                            </h2>
                            <h4 className="text-headingColor dark:text-gray-300 font-[600] text-[14px] md:text-[16px]">
                                Leadership Roles
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
