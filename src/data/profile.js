export const profile = {
  name: 'Rabindra Adhikari',
  shortName: 'RA',
  role: 'Java Developer',
  location: 'Nepal',
  email: 'raj242adk@gmail.com',
  phone: '+977 9814922873',
  summary:
    'I build backend products with a bias for clean architecture, secure APIs, search-backed performance, and observability that keeps production behavior understandable under real traffic.',
  resumePath: '/Rabindra-Adhikari-Resume.pdf',
  links: {
    linkedin: 'https://www.linkedin.com/in/rabindra-a-457aa41b3/',
    githubPrimary: 'https://github.com/raj242adk',
    githubSecondary: 'https://github.com/rabindrazph',
    medium: 'https://medium.com/@rajadhikari_99253',
  },
  heroBullets: [
    'Designed cohort-aware healthcare analytics and dashboard filtering for population reporting.',
    'Connected authentication, profile updates, and messaging flows with Keycloak and Kafka.',
    'Improved API responsiveness by shifting slow relational reporting paths into Elasticsearch.',
  ],
  heroStats: [
    {
      label: 'Current Role',
      value: 'Zakipoint Healthcare',
      detail: 'Java Developer since April 2024',
    },
    {
      label: 'Operating Stack',
      value: 'Spring + Kafka + Search',
      detail: 'Java, Grails, Elasticsearch, Keycloak',
    },
    {
      label: 'Delivery Style',
      value: 'Observable by default',
      detail: 'Prometheus, Loki, Grafana, clean modular services',
    },
  ],
  impactCards: [
    {
      label: 'Focus',
      value: 'Scalable backend systems',
      detail: 'REST APIs, event-driven workflows, modular architecture',
    },
    {
      label: 'Production Lens',
      value: 'Performance and reliability',
      detail: 'Search optimization, debugging visibility, stable integrations',
    },
    {
      label: 'Foundation',
      value: 'BSc. CSIT • 74%',
      detail: 'College of Applied Business, 2019 to 2024',
    },
  ],
  experience: [
    {
      company: 'Zakipoint Healthcare',
      role: 'Java Developer',
      link: 'https://www.zakipointhealth.com/',
      location: 'Sanepa, Lalitpur',
      period: 'April 2024 to Present',
      highlights: [
        'Worked on zAnalytics with dynamic cohort-based member filtering for dashboards and population reporting.',
        'Contributed to eEnrollment workflows for employee and dependent enrollment management.',
        'Built and enhanced zConnect features including member ID card, EOP card, profile updates, and centralized authentication.',
        'Migrated slow relational query paths to Elasticsearch for faster zAnalytics dashboard APIs.',
        'Monitored services with Prometheus, Loki, and Grafana to improve debugging and system stability.',
      ],
    },
    {
      company: 'eSewa Pvt. Ltd',
      role: 'Java Intern',
      link: 'https://esewa.com.np/#/home',
      location: 'Pulchowk, Lalitpur',
      period: 'December 2023 to March 2024',
      highlights: [
        'Developed and optimized Java and Spring Boot REST APIs with secure JWT authentication.',
        'Improved application performance through clean design practices and maintainable service structure.',
        'Integrated Angular frontend pieces including components, services, and routing against backend APIs.',
      ],
    },
  ],
  skillGroups: [
    {
      title: 'Backend Engineering',
      description: 'The systems layer I am strongest in.',
      items: [
        'Java',
        'OOP',
        'Java 8',
        'Stream API',
        'Collections',
        'Exception Handling',
        'Spring Boot',
        'Spring MVC',
        'Spring Data JPA',
        'JUnit',
      ],
    },
    {
      title: 'Distributed Systems',
      description: 'The tools I reach for when data and workflows need to scale.',
      items: [
        'Kafka',
        'REST APIs',
        'Event-driven systems',
        'Keycloak',
        'JWT',
        'Elasticsearch',
        'Aggregations',
        'Pagination',
        'Kibana',
      ],
    },
    {
      title: 'Data, Frontend, and Delivery',
      description: 'The supporting stack that makes product work complete.',
      items: [
        'MySQL',
        'H2',
        'Redis',
        'Angular',
        'React',
        'Git',
        'GitHub',
        'Jira',
        'OpenProject',
        'Jenkins',
        'Prometheus',
        'Loki',
        'Grafana',
      ],
    },
  ],
  project: {
    title: 'Banking Service',
    link: 'https://github.com/rabindrazph/banking-service/tree/kafka-configuration',
    summary:
      'A modular monolith backend project that pulls together secure identity, event processing, observability, and automated delivery without collapsing into framework sprawl.',
    pillars: [
      {
        title: 'Security Spine',
        detail: 'Centralized authentication and authorization with Keycloak.',
      },
      {
        title: 'Reliable Messaging',
        detail: 'Kafka-based flows backed by a dead-letter queue for failure handling.',
      },
      {
        title: 'Observability Loop',
        detail: 'Prometheus, Loki, and Grafana wired in for metrics, logs, and operational visibility.',
      },
      {
        title: 'Delivery Discipline',
        detail: 'Jenkins-driven CI/CD for repeatable build, test, and deployment pipelines.',
      },
    ],
    outcomes: [
      'Spring Boot 4.0 architecture built as a modular monolith with clear service boundaries.',
      'Production-minded setup that treats monitoring and fault handling as part of the design, not afterthoughts.',
      'A strong showcase of backend system design beyond CRUD-only application work.',
    ],
  },
  profiles: [
    {
      label: 'GitHub',
      handle: 'raj242adk',
      href: 'https://github.com/raj242adk',
      note: 'Primary public code profile.',
    },
    {
      label: 'GitHub',
      handle: 'rabindrazph',
      href: 'https://github.com/rabindrazph',
      note: 'Additional repositories and experiments.',
    },
    {
      label: 'Medium',
      handle: '@rajadhikari_99253',
      href: 'https://medium.com/@rajadhikari_99253',
      note: 'Writing and technical notes.',
    },
    {
      label: 'LinkedIn',
      handle: 'rabindra-a-457aa41b3',
      href: 'https://www.linkedin.com/in/rabindra-a-457aa41b3/',
      note: 'Professional profile and contact point.',
    },
  ],
};
