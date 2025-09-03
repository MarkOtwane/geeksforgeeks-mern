const company = {
	name: "TechNova Solutions",
	founded: 2015,
	location: "Nairobi, Kenya",
	departments: {
		hr: {
			head: "Alice Mwangi",
			employees: 8,
			responsibilities: ["Recruitment", "Employee Relations", "Payroll", "Training & Development"],
		},
		it: {
			head: "David Kamau",
			employees: 20,
			responsibilities: ["Software Development", "Network Administration", "Cybersecurity", "Technical Support"],
		},
		marketing: {
			head: "Grace Otieno",
			employees: 12,
			responsibilities: ["Advertising", "Social Media Management", "Market Research", "Brand Strategy"],
		},
		finance: {
			head: "John Mworia",
			employees: 6,
			responsibilities: ["Budgeting", "Accounting", "Financial Planning", "Reporting"],
		},
	},
};

const {
	name,
	departments: {
		hr: { employees: hrEmployees },
		it: { employees: itEmployees },
	},
} = company;
console.log(hrEmployees);
console.log(itEmployees);
