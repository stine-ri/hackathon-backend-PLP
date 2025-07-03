exports.getWindsurfRecommendations = async (req, res) => {
  const { goal } = req.body;
  const lowerGoal = goal.toLowerCase();

  let mockResponse;

  if (lowerGoal.includes("mern")) {
    mockResponse = {
      goal: "MERN Stack Development",
      description: "Master full-stack JavaScript development with MongoDB, Express, React, and Node.js",
      difficulty: "Intermediate",
      recommendedSkills: [
        { skill: "JavaScript", importance: "Core", level: "Advanced" },
        { skill: "React", importance: "Core", level: "Intermediate" },
        { skill: "Node.js", importance: "Core", level: "Intermediate" },
        { skill: "MongoDB", importance: "Core", level: "Basic" },
        { skill: "Express", importance: "Core", level: "Basic" },
        { skill: "REST APIs", importance: "Essential", level: "Intermediate" },
        { skill: "State Management", importance: "Important", level: "Basic" }
      ],
      roadmap: [
        { 
          week: 1,
          topics: ["HTML5 & CSS3 Fundamentals", "Modern JavaScript (ES6+)"],
          resources: ["MDN Web Docs", "JavaScript.info"],
          hours: 20
        },
        { 
          week: 2,
          topics: ["React Components", "Hooks", "Props & State"],
          resources: ["React Documentation", "FreeCodeCamp React Course"],
          hours: 25
        },
        { 
          week: 3,
          topics: ["Node.js Basics", "Express Framework", "Middleware"],
          resources: ["Node.js Docs", "Express Guide"],
          hours: 30
        },
        { 
          week: 4,
          topics: ["MongoDB CRUD", "Mongoose ODM", "Data Modeling"],
          resources: ["MongoDB University", "Mongoose Docs"],
          hours: 25
        },
        { 
          week: 5,
          topics: ["Authentication (JWT)", "Deployment", "Performance Optimization"],
          resources: ["JWT.io", "Render/Vercel Docs"],
          hours: 35
        }
      ],
      advice: "Build at least 3 complete projects to solidify your understanding. Focus on proper project structure from the beginning.",
      estimatedTime: "5-8 weeks (300+ hours)",
      suggestedProjects: [
        { 
          name: "Blog Platform", 
          complexity: "Intermediate",
          features: ["User auth", "CRUD operations", "Markdown support"]
        },
        { 
          name: "E-commerce Store", 
          complexity: "Advanced",
          features: ["Product catalog", "Shopping cart", "Payment integration"]
        }
      ],
      toolsToLearn: [
        { name: "VS Code", category: "Editor", essential: true },
        { name: "Postman", category: "API Testing", essential: true },
        { name: "MongoDB Compass", category: "Database GUI", essential: false }
      ],
      commonMistakes: [
        "Not handling errors properly in async code",
        "Poor state management architecture",
        "Ignoring security best practices"
      ],
      learningResources: [
        { 
          title: "Full Modern React Course", 
          url: "https://www.udemy.com/course/modern-react-front-to-back/",
          type: "Video Course",
          rating: 4.8
        },
        { 
          title: "Node.js Best Practices", 
          url: "https://github.com/goldbergyoni/nodebestpractices",
          type: "GitHub Repository",
          rating: 5.0
        }
      ],
      certificationSuggestions: [
        "MongoDB University Certification",
        "React Certification (freeCodeCamp)"
      ]
    };
  } else if (lowerGoal.includes("ai")) {
    mockResponse = {
      goal: "AI-Assisted Development",
      description: "Leverage AI tools to enhance your development workflow and productivity",
      difficulty: "Intermediate",
      recommendedSkills: [
        { skill: "Python", importance: "Core", level: "Basic" },
        { skill: "Prompt Engineering", importance: "Core", level: "Intermediate" },
        { skill: "API Integration", importance: "Essential", level: "Basic" },
        { skill: "GitHub Copilot", importance: "Important", level: "Basic" },
        { skill: "LLM Concepts", importance: "Important", level: "Basic" }
      ],
      roadmap: [
        { 
          week: 1,
          topics: ["AI Fundamentals", "Setting up tools"],
          resources: ["AI For Everyone (Coursera)", "OpenAI Documentation"],
          hours: 15
        },
        { 
          week: 2,
          topics: ["Effective Prompting", "Code Generation"],
          resources: ["Learn Prompting", "GitHub Copilot Docs"],
          hours: 20
        },
        { 
          week: 3,
          topics: ["AI API Integration", "Error Handling"],
          resources: ["OpenAI Cookbook", "LangChain Docs"],
          hours: 25
        },
        { 
          week: 4,
          topics: ["AI-Assisted Debugging", "Documentation Generation"],
          resources: ["Copilot Labs", "Tabnine"],
          hours: 20
        },
        { 
          week: 5,
          topics: ["Ethical Considerations", "Workflow Optimization"],
          resources: ["AI Ethics Guidelines", "Case Studies"],
          hours: 15
        }
      ],
      advice: "Use AI as a copilot, not a replacement. Always review and understand generated code.",
      estimatedTime: "4-6 weeks (100+ hours)",
      suggestedProjects: [
        { 
          name: "AI Code Reviewer", 
          complexity: "Intermediate",
          features: ["Code analysis", "Suggestions", "Security checks"]
        }
      ],
      toolsToLearn: [
        { name: "ChatGPT", category: "LLM", essential: true },
        { name: "GitHub Copilot", category: "Code Assistant", essential: true },
        { name: "Bard", category: "LLM", essential: false }
      ],
      commonMistakes: [
        "Blindly accepting AI suggestions without review",
        "Not providing enough context in prompts",
        "Overlooking security implications"
      ],
      learningResources: [
        { 
          title: "Prompt Engineering Guide", 
          url: "https://www.promptingguide.ai/",
          type: "Online Guide",
          rating: 4.7
        }
      ],
      certificationSuggestions: [
        "DeepLearning.AI Prompt Engineering Course"
      ]
    };
  } else if (lowerGoal.includes("dart")) {
    mockResponse = {
      goal: "Dart Programming",
      description: "Master the Dart language as foundation for Flutter development",
      difficulty: "Beginner",
      recommendedSkills: [
        { skill: "Dart Syntax", importance: "Core", level: "Advanced" },
        { skill: "OOP Concepts", importance: "Core", level: "Intermediate" },
        { skill: "Collections", importance: "Essential", level: "Basic" },
        { skill: "Async Programming", importance: "Essential", level: "Basic" }
      ],
      roadmap: [
        { 
          week: 1,
          topics: ["Variables & Types", "Control Flow"],
          resources: ["Dart Language Tour", "DartPad"],
          hours: 15
        },
        { 
          week: 2,
          topics: ["Functions", "Collections"],
          resources: ["Dart Documentation", "Exercism Dart Track"],
          hours: 20
        },
        { 
          week: 3,
          topics: ["Classes & Objects", "Inheritance"],
          resources: ["Object-Oriented Dart", "Dart Samples"],
          hours: 25
        },
        { 
          week: 4,
          topics: ["Null Safety", "Async/Await"],
          resources: ["Dart Null Safety Guide", "Asynchronous Programming"],
          hours: 20
        }
      ],
      advice: "Practice daily with DartPad. Focus on strong typing and null safety concepts.",
      estimatedTime: "3-4 weeks (80+ hours)",
      suggestedProjects: [
        { 
          name: "CLI Calculator", 
          complexity: "Beginner",
          features: ["Basic operations", "Error handling"]
        }
      ],
      toolsToLearn: [
        { name: "Dart SDK", category: "Compiler", essential: true },
        { name: "DartPad", category: "Online Editor", essential: true }
      ],
      commonMistakes: [
        "Ignoring type annotations",
        "Not handling null cases",
        "Mixing sync and async code"
      ],
      learningResources: [
        { 
          title: "Dart Apprentice Book", 
          url: "https://www.raywenderlich.com/books/dart-apprentice",
          type: "E-book",
          rating: 4.9
        }
      ]
    };
  } else if (lowerGoal.includes("flutter")) {
    mockResponse = {
      goal: "Flutter Development",
      description: "Build cross-platform mobile applications with Flutter framework",
      difficulty: "Intermediate",
      recommendedSkills: [
        { skill: "Dart", importance: "Core", level: "Intermediate" },
        { skill: "Widget Tree", importance: "Core", level: "Intermediate" },
        { skill: "State Management", importance: "Essential", level: "Basic" },
        { skill: "Navigation", importance: "Essential", level: "Basic" }
      ],
      roadmap: [
        { 
          week: 1,
          topics: ["Flutter Setup", "Basic Widgets"],
          resources: ["Flutter Docs", "Flutter Samples"],
          hours: 20
        },
        { 
          week: 2,
          topics: ["Layouts", "Forms"],
          resources: ["Flutter Layout Guide", "Form Validation"],
          hours: 25
        },
        { 
          week: 3,
          topics: ["State Management", "Provider"],
          resources: ["Flutter State Management", "Riverpod Docs"],
          hours: 30
        },
        { 
          week: 4,
          topics: ["Firebase Integration", "Authentication"],
          resources: ["Firebase Flutter", "Auth Tutorials"],
          hours: 25
        },
        { 
          week: 5,
          topics: ["Deployment", "App Store Guidelines"],
          resources: ["Flutter Deployment", "App Store Docs"],
          hours: 20
        }
      ],
      advice: "Start with simple UIs before complex state management. Master one state solution before trying others.",
      estimatedTime: "5-8 weeks (150+ hours)",
      suggestedProjects: [
        { 
          name: "Weather App", 
          complexity: "Intermediate",
          features: ["API integration", "Location services"]
        }
      ],
      toolsToLearn: [
        { name: "Flutter SDK", category: "Framework", essential: true },
        { name: "Android Studio", category: "IDE", essential: true },
        { name: "Firebase", category: "Backend", essential: false }
      ],
      commonMistakes: [
        "Over-complicating state management",
        "Not testing on both iOS and Android",
        "Ignoring widget lifecycle"
      ],
      learningResources: [
        { 
          title: "Flutter Cookbook", 
          url: "https://flutter.dev/docs/cookbook",
          type: "Official Documentation",
          rating: 4.8
        }
      ],
      certificationSuggestions: [
        "Flutter Certification by Google"
      ]
    };
  } else if (lowerGoal.includes("testing")) {
    mockResponse = {
      goal: "Software Testing",
      description: "Master testing methodologies for robust application development",
      difficulty: "Intermediate",
      recommendedSkills: [
        { skill: "Unit Testing", importance: "Core", level: "Intermediate" },
        { skill: "Integration Testing", importance: "Core", level: "Basic" },
        { skill: "Test-Driven Development", importance: "Important", level: "Basic" },
        { skill: "CI/CD Pipelines", importance: "Important", level: "Basic" }
      ],
      roadmap: [
        { 
          week: 1,
          topics: ["Testing Fundamentals", "Jest Basics"],
          resources: ["Jest Documentation", "Testing Principles"],
          hours: 20
        },
        { 
          week: 2,
          topics: ["React Testing", "Component Tests"],
          resources: ["React Testing Library", "Testing Recipes"],
          hours: 25
        },
        { 
          week: 3,
          topics: ["Integration Testing", "Mocking"],
          resources: ["MSW Library", "API Mocking"],
          hours: 30
        },
        { 
          week: 4,
          topics: ["E2E Testing", "Cypress"],
          resources: ["Cypress Docs", "E2E Patterns"],
          hours: 25
        }
      ],
      advice: "Write tests alongside development, not after. Aim for good coverage but focus on critical paths.",
      estimatedTime: "4-6 weeks (120+ hours)",
      suggestedProjects: [
        { 
          name: "Test Suite for Todo App", 
          complexity: "Intermediate",
          features: ["Unit tests", "Integration tests", "E2E tests"]
        }
      ],
      toolsToLearn: [
        { name: "Jest", category: "Testing Framework", essential: true },
        { name: "Cypress", category: "E2E Testing", essential: true },
        { name: "Postman", category: "API Testing", essential: false }
      ],
      commonMistakes: [
        "Testing implementation details",
        "Not cleaning up test data",
        "Over-mocking dependencies"
      ],
      learningResources: [
        { 
          title: "Testing JavaScript Course", 
          url: "https://testingjavascript.com/",
          type: "Video Course",
          rating: 4.9
        }
      ],
      certificationSuggestions: [
        "ISTQB Foundation Level Certification"
      ]
    };
  } else {
    mockResponse = {
      goal,
      message: "We don't have specific recommendations for that goal yet.",
      suggestions: [
        "Try searching for: MERN, AI, Flutter, Dart, or Software Testing",
        "Check back later as we add more learning paths",
        "Contact support if you need a custom learning plan"
      ]
    };
  }

  res.status(200).json(mockResponse);
};