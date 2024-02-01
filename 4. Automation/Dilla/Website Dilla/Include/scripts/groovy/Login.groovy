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



class Login {
	@Given("User navigate to homepage Secondhand Store website")
	public void user_navigate_to_homepage_Secondhand_Store_website() {
		WebUI.openBrowser('')
		WebUI.navigateToUrl('https://secondhand-store.herokuapp.com/')
	}

	@When("User click on login button")
	public void user_click_on_login_button() {
		WebUI.click(findTestObject('Object Repository/Login/Page_Secondhand Store/a_Masuk'))
	}

	@And("User input email(.*)")
	public void user_input_emailannisadwi_gmail_com(String email) {
		WebUI.setText(findTestObject('Object Repository/Login/Page_Secondhand Store/input_Email_exampleInputEmail1'), email)
	}

	@And("User input password(.*)")
	public void user_input_passworda_b_c_d(String password) {
		WebUI.setEncryptedText(findTestObject('Object Repository/Login/Page_Secondhand Store/input_Password_exampleInputPassword1'),
				password)
	}

	@When("User click on login buttons")
	public void user_click_on_login_buttons() {
		WebUI.click(findTestObject('Object Repository/Login/Page_Secondhand Store/button_Masuk'))
	}

	@Then("User successful login")
	public void user_successful_login() {
		WebUI.delay(1)
	}
}