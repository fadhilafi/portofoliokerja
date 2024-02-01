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



class LoginMobile {
	/**
	 * The step definitions below match with Katalon sample Gherkin steps
	 */
	@Given("I launch Application")
	public void i_launch_Application() {
		// Write code here that turns the phrase above into concrete actions
		Mobile.startApplication(GlobalVariable.app_path, true)
	}

	@When("I click Akun button")
	public void i_click_Akun_button() {
		// Write code here that turns the phrase above into concrete actions
		Mobile.tap(findTestObject('Object Repository/login_via_record/android.widget.ImageView'), 0)
	}

	@When("I click Masuk button")
	public void i_click_Masuk_button() {
		// Write code here that turns the phrase above into concrete actions
		Mobile.tap(findTestObject('Object Repository/login_via_record/android.widget.Button - Masuk'), 0)
	}

	@When("I input username (.*)")
	public void i_input_username_studentqa_binar_id(String username) {
		// Write code here that turns the phrase above into concrete actions
		Mobile.setText(findTestObject('Object Repository/login_via_record/android.widget.EditText - Masukkan email'), username,
				0)

	}

	@When("I input password (.*)")
	public void i_input_password_studentQA(String password) {
		// Write code here that turns the phrase above into concrete actions
		Mobile.setText(findTestObject('Object Repository/login_via_record/android.widget.EditText - Masukkan password'), password,
				0)
	}

	@When("I click Masuk button page")
	public void i_click_Masuk_button_page() {
		// Write code here that turns the phrase above into concrete actions
		Mobile.tap(findTestObject('Object Repository/login_via_record/android.widget.Button - Masuk (1)'), 0)
	}


	@Then("I landing to the Homepage")
	public void i_landing_to_the_Homepage() {
		// Write code here that turns the phrase above into concrete actions
		Mobile.delay(5)
	}
}
