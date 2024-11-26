import { faker } from '@faker-js/faker';

describe('Working with task API', () => {
    const authToken = Cypress.env('authToken');

    it("Creating a task", () => {
        cy.request({
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: authToken
            },
            url: "/api/tasks",
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
            url: `/api/tasks/${taskID}`,
            headers: {
                "Content-Type": "application/json",
                Authorization: authToken
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
            url: "/api/tasks",
            headers: {
                "Content-Type": "application/json",
                Authorization: authToken
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
            url: `/api/tasks/${taskID}`,
            headers: {
                "Content-Type": "application/json",
                Authorization: authToken
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
            url: `/api/tasks/${taskID}`,
            headers: {
                "Content-Type": "application/json",
                Authorization: authToken
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
            url: `/api/tasks/${taskID}`,
            headers: {
                Authorization: authToken
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
            url: `/api/tasks/${taskID}`,
            headers: {
                Authorization: authToken
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404);
            expect(response.body.title).to.eq("Not Found");
            cy.log("Task deleted, status 404, message 'Not Found'");
        });
    });
});




