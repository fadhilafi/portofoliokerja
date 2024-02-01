import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

def tap_timeout = 10

Mobile.callTestCase(findTestCase('page_helper/start_apk'), [:])

//tap add product
Mobile.tap(findTestObject('null'), tap_timeout)

Mobile.tap(findTestObject('null'), tap_timeout)

Mobile.tap(findTestObject('null'), tap_timeout)

Mobile.setText(findTestObject('null'), binarqae1)

Mobile.tap(findTestObject('null'), tap_timeout)

Mobile.setText(findTestObject('null'), students1234)

Mobile.tap(findTestObject('null'), tap_timeout)

WebUI.delay(4)

//expected result: see button login
Mobile.verifyelementvisible(findTestObject('null'), tap_timeout, FailureHandling.CONTINUE_ON_FAILURE)

