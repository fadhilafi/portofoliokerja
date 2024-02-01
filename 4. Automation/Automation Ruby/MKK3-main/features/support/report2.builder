require 'report_builder'

time = Time.now.getutc
ReportBuilder.configure do |config|
 config.json_path = 'reports'
 config.report_path = 'reports'
 config.report_types = [:json, :retry, :html]
 config.report_tabs = %w[Overview Features Scenarios Errors]
 config.report_title = 'Login'
 config.compress_images = false
 config.additional_info = { 'Project name' => 'TAP', 'Platform' => 'Mobile', 'Report generated' => time }
end
ReportBuilder.build_report