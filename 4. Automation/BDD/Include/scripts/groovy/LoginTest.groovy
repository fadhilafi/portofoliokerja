import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testcase.TestCaseFactory
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testdata.TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import internal.GlobalVariable

import org.openqa.selenium.WebElement
import org.openqa.selenium.WebDriver
import org.openqa.selenium.By

import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
import com.kms.katalon.core.webui.driver.DriverFactory

import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObjectProperty

import com.kms.katalon.core.mobile.helper.MobileElementCommonHelper
import com.kms.katalon.core.util.KeywordUtil

import com.kms.katalon.core.webui.exception.WebElementNotFoundException

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When



class LoginTest {
	/**
	 * The step definitions below match with Katalon sample Gherkin steps
	 */
	@Given("Users navigated to login page")
	public void users_navigated_to_login_page() {
		WebUI.openBrowser('')
		WebUI.navigateToUrl('https://deployed-five.vercel.app/')
	}

	@When("Users enter username (.*) and password (.*)")
	public void users_enter_username_binarqae_gmail_com_and_password_students(String username, String password) {
		WebUI.click(findTestObject('Object Repository/Page_Secondhand Store/a_Masuk'))
		WebUI.setText(findTestObject('Object Repository/Page_Secondhand Store/input_Email_exampleInputEmail1'), username)
		WebUI.setText(findTestObject('Object Repository/Page_Secondhand Store/input_Password_exampleInputPassword1'), password)
	}

	@And("Users click on login button")
	public void users_click_on_login_button() {
		WebUI.click(findTestObject('Object Repository/Page_Secondhand Store/button_Masuk'))
	}

	@Then("Users is navigated to homepage")
	public void users_is_navigated_to_homepage() {
		WebUI.closeBrowser()
	}
}