import { faker } from '@faker-js/faker';

describe('Working with task API', () => {
    it("Creating a task", () => {
        cy.request({
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbl9hdXRvbWF0aW9uIiwiZXhwIjoxNzMxMTMzMDg4LCJhdXRoIjoiUk9MRV9BRE1JTiIsImlhdCI6MTczMTA0NjY4OH0.SVMxXnKKuqB0J4EmufWHehTZ34azV7mDNKb_j6yiQM0Yh44-YnGYSdiQq1f7Al-TxJglNdoVvTbCK8mFpkBIYQ"
            },
            url: "https://sqlverifier-live-6e21ca0ed768.herokuapp.com/api/tasks",
            body: {
                text: faker.lorem.words(3),
                answer: faker.lorem.sentence(),
                title: faker.company.catchPhrase()
            }
        }).then((response) => {
            expect(response.status).to.eq(201);
            const taskID = response.body.id;
            Cypress.env('taskID', taskID);
        });
    });

    it("Editing task Positive", () => {
        const taskID = Cypress.env('taskID');

        cy.request({
            method: "PUT",
            url: `https://sqlverifier-live-6e21ca0ed768.herokuapp.com/api/tasks/${taskID}`, 
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbl9hdXRvbWF0aW9uIiwiZXhwIjoxNzMxMTMzMDg4LCJhdXRoIjoiUk9MRV9BRE1JTiIsImlhdCI6MTczMTA0NjY4OH0.SVMxXnKKuqB0J4EmufWHehTZ34azV7mDNKb_j6yiQM0Yh44-YnGYSdiQq1f7Al-TxJglNdoVvTbCK8mFpkBIYQ"
            },
            body: {
                id: taskID, 
                text: faker.lorem.words(3),
                answer: faker.lorem.words(2),
                title: faker.company.catchPhrase()
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Task edit successful:", response.body);
        });
    });

    it("Editing task invalid ID (null) and expecting 405 error", () => {
        cy.request({
            method: "PUT",
            url: "https://sqlverifier-live-6e21ca0ed768.herokuapp.com/api/tasks", 
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbl9hdXRvbWF0aW9uIiwiZXhwIjoxNzMxMTMzMDg4LCJhdXRoIjoiUk9MRV9BRE1JTiIsImlhdCI6MTczMTA0NjY4OH0.SVMxXnKKuqB0J4EmufWHehTZ34azV7mDNKb_j6yiQM0Yh44-YnGYSdiQq1f7Al-TxJglNdoVvTbCK8mFpkBIYQ"
            },
            body: {
                id: null, 
                text: faker.lorem.words(3),
                answer: faker.lorem.words(2),
                title: faker.company.catchPhrase()
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(405);
        });
    });
    it("Editing task with empty answer field to expect 400 error", () => {
        const taskID = Cypress.env('taskID');

        cy.request({
            method: "PUT",
            url: `https://sqlverifier-live-6e21ca0ed768.herokuapp.com/api/tasks/${taskID}`, 
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbl9hdXRvbWF0aW9uIiwiZXhwIjoxNzMxMTMzMDg4LCJhdXRoIjoiUk9MRV9BRE1JTiIsImlhdCI6MTczMTA0NjY4OH0.SVMxXnKKuqB0J4EmufWHehTZ34azV7mDNKb_j6yiQM0Yh44-YnGYSdiQq1f7Al-TxJglNdoVvTbCK8mFpkBIYQ"
            },
            body: {
                id: taskID, 
                text: faker.lorem.words(3),
                answer: "", 
                title: faker.company.catchPhrase()
            },
            failOnStatusCode: false 
        }).then((response) => {
            expect(response.status).to.eq(400);
        });
    });
    it("Editing task with empty title field to expect 400 error", () => {
        const taskID = Cypress.env('taskID');

        cy.request({
            method: "PUT",
            url: `https://sqlverifier-live-6e21ca0ed768.herokuapp.com/api/tasks/${taskID}`, 
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbl9hdXRvbWF0aW9uIiwiZXhwIjoxNzMxMTMzMDg4LCJhdXRoIjoiUk9MRV9BRE1JTiIsImlhdCI6MTczMTA0NjY4OH0.SVMxXnKKuqB0J4EmufWHehTZ34azV7mDNKb_j6yiQM0Yh44-YnGYSdiQq1f7Al-TxJglNdoVvTbCK8mFpkBIYQ"
            },
            body: {
                id: taskID, 
                text: faker.lorem.words(2),
                answer: faker.lorem.words(3), 
                title: ""
            },
            failOnStatusCode: false 
        }).then((response) => {
            expect(response.status).to.eq(400);
        });
    });
    it("Deleting task and expecting 204 status", () => {
        const taskID = Cypress.env('taskID');

        cy.request({
            method: "DELETE",
            url: `https://sqlverifier-live-6e21ca0ed768.herokuapp.com/api/tasks/${taskID}`, 
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbl9hdXRvbWF0aW9uIiwiZXhwIjoxNzMxMTMzMDg4LCJhdXRoIjoiUk9MRV9BRE1JTiIsImlhdCI6MTczMTA0NjY4OH0.SVMxXnKKuqB0J4EmufWHehTZ34azV7mDNKb_j6yiQM0Yh44-YnGYSdiQq1f7Al-TxJglNdoVvTbCK8mFpkBIYQ"
            }
        }).then((response) => {
            expect(response.status).to.eq(204);
            cy.log("Deleted with status 204");
        });
    });
    it("Verifying task deletion expecting 404", () => {
        const taskID = Cypress.env('taskID');

        cy.request({
            method: "GET",
            url: `https://sqlverifier-live-6e21ca0ed768.herokuapp.com/api/tasks/${taskID}`, 
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbl9hdXRvbWF0aW9uIiwiZXhwIjoxNzMxMTMzMDg4LCJhdXRoIjoiUk9MRV9BRE1JTiIsImlhdCI6MTczMTA0NjY4OH0.SVMxXnKKuqB0J4EmufWHehTZ34azV7mDNKb_j6yiQM0Yh44-YnGYSdiQq1f7Al-TxJglNdoVvTbCK8mFpkBIYQ"
            },
            failOnStatusCode: false 
        }).then((response) => {
            expect(response.status).to.eq(404);
            expect(response.body.title).to.eq("Not Found"); 
            cy.log("Task deleted, status 404, message 'Not Found'");
        });
    });
});


