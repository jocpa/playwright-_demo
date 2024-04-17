import { Locator, Page } from "@playwright/test";


export class PracticeForm {

    private readonly inputFirstName: Locator
    private readonly inputLastName: Locator
    private readonly inputEmail: Locator
    private readonly clickGender: Locator
    private readonly inputPhoneNumber: Locator
    private readonly dateOfBirth: Locator
    private readonly SelectMonth: Locator
    private readonly SelectYear: Locator
    private readonly completeDate: Locator
    private readonly SelectHobbie: Locator
    private readonly inputAdress: Locator
    private readonly selectState: Locator
    private readonly selectCountry: Locator
    private readonly SelectCity: Locator
    private readonly SelectLucknow: Locator
    private readonly submitForm: Locator

    constructor(page: Page) {

        this.inputFirstName = page.getByPlaceholder('First Name').fill('Miles');
        this.inputLastName = page.getByPlaceholder('Last Name').fill('Morales');
        this.inputEmail = page.getByPlaceholder('name@example.com').fill('milesspiderman@gmail.com')
        this.clickGender = page.getByText('Male', { exact: true }).click();
        this.inputPhoneNumber = page.getByPlaceholder('Mobile Number').fill('5569035345');
        this.dateOfBirth = page.locator('#dateOfBirthInput').click();
        this.SelectMonth = page.locator('div').filter({ hasText: /^JanuaryFebruaryMarchAprilMayJuneJulyAugustSeptemberOctoberNovemberDecember$/ }).getByRole('combobox').selectOption('0'); 
        this.SelectYear = page.getByRole('combobox').nth(1).selectOption('2002');
        this.completeDate = page.getByLabel('Choose Saturday, January 12th,').click();
        this.SelectHobbie = page.getByText('Sports').click();
        this.inputAdress =  page.getByPlaceholder('Current Address').fill('El bronx');
        this.selectState = page.locator('#state svg').click();
        this.selectCountry = page.getByText('Uttar Pradesh', { exact: true }).click();
        this.SelectCity = page.locator('div').filter({ hasText: /^Select City$/ }).nth(3).click();
        this.SelectLucknow = page.getByText('Lucknow', { exact: true }).click();
        this.submitForm = page.getByRole('button', { name: 'Submit' }).click();
        
    }

}