import swaggerJSDoc from "swagger-jsdoc"

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Newhope baito API",
			version: "1.0.0",
			description: "API for Newhope Baito Admin",
		},
		tags: [
			{
				name: "Authentication",
				description: "Endpoints related to user authentication",
			},
			{
				name: "Students",
				description: "Endpoints for managing students",
			},
		],
		servers: [
			{
				url: "http://localhost:8080/",
				description: "Development server",
			},
			{
				url: "https://newhope-baito-server-test.vercel.app",
				description: "Test server",
			},
		],
		// Add security schemes
		components: {
			securitySchemes: {
				bearerAuth: {
					type: "http",
					scheme: "bearer",
					bearerFormat: "JWT",
				},
			},
		},
		// Apply security globally
		security: [
			{
				bearerAuth: [],
			},
		],
	},
	apis: ["./src/routes/*.js"],
}

const swaggerSpec = swaggerJSDoc(options)
export default swaggerSpec
