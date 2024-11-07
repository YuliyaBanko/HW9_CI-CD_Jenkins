import { faker } from '@faker-js/faker';
import { loginPage } from '../../pages/loginpage';
import { getCookies } from 'undici-types';
const loginPageElements = require('../../fixtures/pages/loginSelectors.json')

describe("Santa login - UI and API", ()=>{
    it("User cannot login UI", ()=>{

     });

    it("User cannot login API, UI", ()=>{
        cy.request({
        method:"POST",
        headers: {
        Cookie: "_ym_uid=1730881242899989110; _ym_d=1730881242; __ai_fp_uuid=b736292bfb083397%3A1; __upin=juHuYxBH6v1IsHazyTwRKw; ma_prevFp_3485699018=2081412741|3724111293|3826633276|888000370|2219907560|2766682514|3530670207|888000370|1068634537|3180462103|1068634537|316616520|3442609882|3579944471|3778137224|3579944471|888000370|1068634537|567689674|888000370|621576841|3530670207|3579944471|1068634537|1967389372|668684770|3579944471|2784947692|2065660416|888000370|1227856464|3708322660|718548439|3308070491|3399913399|3579944471|1908024458|3044195005|317122634|361801509|731808717|4071477893|1560596494|1402292998|1408013596|761647476|4265758589|1703704501|2231318396; ma_vis_id_last_sync_3485699018=1730881274508; ma_prevVisId_3485699018=f97658136a081d7771479e2d5461ee6e; ma_id=3020008461719246020134; _buzz_fpc=JTdCJTIydmFsdWUlMjIlM0ElN0IlMjJ1ZnAlMjIlM0ElMjI4MDQ4YzkwODRhMGQ5MzMxZWYyZDM4MzRhMjgyYWYyZiUyMiUyQyUyMmJyb3dzZXJWZXJzaW9uJTIyJTNBJTIyMTI5LjAlMjIlMkMlMjJ0c0NyZWF0ZWQlMjIlM0ExNzMwODgxMjc0MDYyJTdEJTJDJTIycGF0aCUyMiUzQSUyMiUyRiUyMiUyQyUyMmRvbWFpbiUyMiUzQSUyMi5zYW50YS1zZWNyZXQucnUlMjIlMkMlMjJleHBpcmVzJTIyJTNBJTIyVGh1JTJDJTIwMDYlMjBOb3YlMjAyMDI1JTIwMDglM0EyMSUzQTE1JTIwR01UJTIyJTJDJTIyU2FtZVNpdGUlMjIlM0ElMjJMYXglMjIlN0Q=; _buzz_aidata=JTdCJTIydmFsdWUlMjIlM0ElN0IlMjJ1ZnAlMjIlM0ElMjJqdUh1WXhCSDZ2MUlzSGF6eVR3Ukt3JTIyJTJDJTIyYnJvd3NlclZlcnNpb24lMjIlM0ElMjIxMjkuMCUyMiUyQyUyMnRzQ3JlYXRlZCUyMiUzQTE3MzA4ODEyNjQ4MDIlN0QlMkMlMjJwYXRoJTIyJTNBJTIyJTJGJTIyJTJDJTIyZG9tYWluJTIyJTNBJTIyLnNhbnRhLXNlY3JldC5ydSUyMiUyQyUyMmV4cGlyZXMlMjIlM0ElMjJUaHUlMkMlMjAwNiUyME5vdiUyMDIwMjUlMjAwOCUzQTIxJTNBMTUlMjBHTVQlMjIlMkMlMjJTYW1lU2l0ZSUyMiUzQSUyMkxheCUyMiU3RA==; _buzz_mtsa=JTdCJTIydmFsdWUlMjIlM0ElN0IlMjJ1ZnAlMjIlM0ElMjJmOTc2NTgxMzZhMDgxZDc3NzE0NzllMmQ1NDYxZWU2ZSUyMiUyQyUyMmJyb3dzZXJWZXJzaW9uJTIyJTNBJTIyMTI5LjAlMjIlMkMlMjJ0c0NyZWF0ZWQlMjIlM0ExNzMwODgxMjc0NTE4JTdEJTJDJTIycGF0aCUyMiUzQSUyMiUyRiUyMiUyQyUyMmRvbWFpbiUyMiUzQSUyMi5zYW50YS1zZWNyZXQucnUlMjIlMkMlMjJleHBpcmVzJTIyJTNBJTIyVGh1JTJDJTIwMDYlMjBOb3YlMjAyMDI1JTIwMDglM0EyMSUzQTE1JTIwR01UJTIyJTJDJTIyU2FtZVNpdGUlMjIlM0ElMjJMYXglMjIlN0Q=; lang=ru; _ym_isad=2; adrdel=1730960032725; adrcid=AhBYFfLl_52LtUyi_aWGllg; acs_3=%7B%22hash%22%3A%225c916bd2c1ace501cfd5%22%2C%22nextSyncTime%22%3A1731046432751%2C%22syncLog%22%3A%7B%22224%22%3A1730960032751%2C%221228%22%3A1730960032751%2C%221230%22%3A1730960032751%7D%7D"
    },
        url:"https://santa-secret.ru/",
        body: {password:"{{$randomPassword}}"},
});
    });
    it("User cannot login API, UI", ()=>{
        cy.request({
        method:"POST",
        headers: {
        Cookie: "_ym_uid=1730881242899989110; _ym_d=1730881242; __ai_fp_uuid=b736292bfb083397%3A1; __upin=juHuYxBH6v1IsHazyTwRKw; ma_prevFp_3485699018=2081412741|3724111293|3826633276|888000370|2219907560|2766682514|3530670207|888000370|1068634537|3180462103|1068634537|316616520|3442609882|3579944471|3778137224|3579944471|888000370|1068634537|567689674|888000370|621576841|3530670207|3579944471|1068634537|1967389372|668684770|3579944471|2784947692|2065660416|888000370|1227856464|3708322660|718548439|3308070491|3399913399|3579944471|1908024458|3044195005|317122634|361801509|731808717|4071477893|1560596494|1402292998|1408013596|761647476|4265758589|1703704501|2231318396; ma_vis_id_last_sync_3485699018=1730881274508; ma_prevVisId_3485699018=f97658136a081d7771479e2d5461ee6e; ma_id=3020008461719246020134; _buzz_fpc=JTdCJTIydmFsdWUlMjIlM0ElN0IlMjJ1ZnAlMjIlM0ElMjI4MDQ4YzkwODRhMGQ5MzMxZWYyZDM4MzRhMjgyYWYyZiUyMiUyQyUyMmJyb3dzZXJWZXJzaW9uJTIyJTNBJTIyMTI5LjAlMjIlMkMlMjJ0c0NyZWF0ZWQlMjIlM0ExNzMwODgxMjc0MDYyJTdEJTJDJTIycGF0aCUyMiUzQSUyMiUyRiUyMiUyQyUyMmRvbWFpbiUyMiUzQSUyMi5zYW50YS1zZWNyZXQucnUlMjIlMkMlMjJleHBpcmVzJTIyJTNBJTIyVGh1JTJDJTIwMDYlMjBOb3YlMjAyMDI1JTIwMDglM0EyMSUzQTE1JTIwR01UJTIyJTJDJTIyU2FtZVNpdGUlMjIlM0ElMjJMYXglMjIlN0Q=; _buzz_aidata=JTdCJTIydmFsdWUlMjIlM0ElN0IlMjJ1ZnAlMjIlM0ElMjJqdUh1WXhCSDZ2MUlzSGF6eVR3Ukt3JTIyJTJDJTIyYnJvd3NlclZlcnNpb24lMjIlM0ElMjIxMjkuMCUyMiUyQyUyMnRzQ3JlYXRlZCUyMiUzQTE3MzA4ODEyNjQ4MDIlN0QlMkMlMjJwYXRoJTIyJTNBJTIyJTJGJTIyJTJDJTIyZG9tYWluJTIyJTNBJTIyLnNhbnRhLXNlY3JldC5ydSUyMiUyQyUyMmV4cGlyZXMlMjIlM0ElMjJUaHUlMkMlMjAwNiUyME5vdiUyMDIwMjUlMjAwOCUzQTIxJTNBMTUlMjBHTVQlMjIlMkMlMjJTYW1lU2l0ZSUyMiUzQSUyMkxheCUyMiU3RA==; _buzz_mtsa=JTdCJTIydmFsdWUlMjIlM0ElN0IlMjJ1ZnAlMjIlM0ElMjJmOTc2NTgxMzZhMDgxZDc3NzE0NzllMmQ1NDYxZWU2ZSUyMiUyQyUyMmJyb3dzZXJWZXJzaW9uJTIyJTNBJTIyMTI5LjAlMjIlMkMlMjJ0c0NyZWF0ZWQlMjIlM0ExNzMwODgxMjc0NTE4JTdEJTJDJTIycGF0aCUyMiUzQSUyMiUyRiUyMiUyQyUyMmRvbWFpbiUyMiUzQSUyMi5zYW50YS1zZWNyZXQucnUlMjIlMkMlMjJleHBpcmVzJTIyJTNBJTIyVGh1JTJDJTIwMDYlMjBOb3YlMjAyMDI1JTIwMDglM0EyMSUzQTE1JTIwR01UJTIyJTJDJTIyU2FtZVNpdGUlMjIlM0ElMjJMYXglMjIlN0Q=; lang=ru; _ym_isad=2; adrdel=1730960032725; adrcid=AhBYFfLl_52LtUyi_aWGllg; acs_3=%7B%22hash%22%3A%225c916bd2c1ace501cfd5%22%2C%22nextSyncTime%22%3A1731046432751%2C%22syncLog%22%3A%7B%22224%22%3A1730960032751%2C%221228%22%3A1730960032751%2C%221230%22%3A1730960032751%7D%7D"
    },
        url:"https://santa-secret.ru/",
        body: {password:"{{$randomPassword}}"},
});
    });
     })