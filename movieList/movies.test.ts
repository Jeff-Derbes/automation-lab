// Lines 2 through 6 are our boilerplate lines of code, we need them for our tests to work
import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})


test('Add movie to the page', async () => {
    let inputBar = await driver.findElement(By.css('input'))

    let button = await driver.findElement(By.css('button'))

    await inputBar.sendKeys('Interstellar')
    await driver.sleep(1000)

    await button.click()
    await driver.sleep(2000)

    driver.findElement(By.id('Interstellar')).click()
    await driver.sleep(2000)


})


