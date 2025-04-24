const employees = [
    {
        "id": 1,
        "name": "Akshay",
        "email": "employee1@gmail.com",
        "password": "123",
        "taskStats": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        },
        "tasks": [
            {
                "title": "Prepare monthly report",
                "description": "Compile and analyze sales data for the month.",
                "date": "2025-04-15",
                "category": "Reporting",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Client follow-up",
                "description": "Call the client to finalize deal terms.",
                "date": "2025-04-10",
                "category": "Client Relations",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Update CRM",
                "description": "Ensure all recent interactions are logged in CRM.",
                "date": "2025-04-05",
                "category": "Administration",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    },
    {
        "id": 2,
        "name": "Akshansh",
        "email": "employee2@gmail.com",
        "password": "123",
        "taskStats": {
            "active": 2,
            "newTask": 2,
            "completed": 1,
            "failed": 1
        },
        "tasks": [
            {
                "title": "Design landing page",
                "description": "Create a new design mockup for the upcoming campaign.",
                "date": "2025-04-12",
                "category": "Design",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Team meeting",
                "description": "Discuss project progress and roadblocks.",
                "date": "2025-04-09",
                "category": "Management",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Fix UI bugs",
                "description": "Resolve reported issues in the UI of the web app.",
                "date": "2025-04-06",
                "category": "Development",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            },
            {
                "title": "Deploy update",
                "description": "Push the latest version of the app to production.",
                "date": "2025-04-13",
                "category": "Deployment",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 3,
        "name": "Mayank",
        "email": "employee3@gmail.com",
        "password": "123",
        "taskStats": {
            "active": 2,
            "newTask": 2,
            "completed": 2,
            "failed": 1
        },
        "tasks": [
            {
                "title": "Social media campaign",
                "description": "Schedule posts for the upcoming product launch.",
                "date": "2025-04-08",
                "category": "Marketing",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "SEO optimization",
                "description": "Improve page load speed and keyword relevance.",
                "date": "2025-04-11",
                "category": "Marketing",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Market research",
                "description": "Analyze competitor strategies and customer feedback.",
                "date": "2025-04-10",
                "category": "Research",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Internal newsletter",
                "description": "Draft content for this month’s internal email update.",
                "date": "2025-04-07",
                "category": "Communication",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Create infographic",
                "description": "Design an infographic showing Q1 performance.",
                "date": "2025-04-05",
                "category": "Design",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    },
    {
        "id": 4,
        "name": "VM",
        "email": "employee4@gmail.com",
        "password": "123",
        "taskStats": {
            "active": 2,
            "newTask": 2,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "title": "Inventory audit",
                "description": "Check stock and update inventory logs.",
                "date": "2025-04-09",
                "category": "Operations",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Supplier negotiation",
                "description": "Negotiate pricing and delivery terms with new suppliers.",
                "date": "2025-04-14",
                "category": "Procurement",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Logistics review",
                "description": "Assess current logistics and suggest improvements.",
                "date": "2025-04-13",
                "category": "Logistics",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 5,
        "name": "Saurabh",
        "email": "employee5@gmail.com",
        "password": "123",
        "taskStats": {
            "active": 2,
            "newTask": 2,
            "completed": 2,
            "failed": 1
        },
        "tasks": [
            {
                "title": "Customer feedback analysis",
                "description": "Read and summarize recent feedback from users.",
                "date": "2025-04-07",
                "category": "Support",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Automate reports",
                "description": "Create a script to automate daily report generation.",
                "date": "2025-04-11",
                "category": "Automation",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "QA testing",
                "description": "Run test cases for the new mobile app.",
                "date": "2025-04-12",
                "category": "Quality Assurance",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Fix critical bug",
                "description": "Resolve crashing issue in the payment module.",
                "date": "2025-04-05",
                "category": "Development",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            },
            {
                "title": "Write documentation",
                "description": "Document the new API endpoints.",
                "date": "2025-04-10",
                "category": "Documentation",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    }
]


const admin = [
    {
        "id": 1,
        "email": "admin@gmail.com",
        "password": "123"
    }
];


// Getter function
export const GetLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees') || '[]');
    const admin = JSON.parse(localStorage.getItem('admin') || '[]');
    return { employees, admin };
};

// Dedicated setter for employees only
export const UpdateEmployeesLocalStorage = (updatedEmployees) => {
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
};

// Dedicated setter for admin if needed in future
export const UpdateAdminLocalStorage = (updatedAdmin) => {
    localStorage.setItem("admin", JSON.stringify(updatedAdmin));
};

export const SetLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
};



  
