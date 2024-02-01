require 'report_builder'

time = Time.now.getutc
ReportBuilder.configure do |config|
 config.json_path = 'reports'
 config.report_path = 'reports'
 config.report_types = [:json, :retry, :html]
 config.report_tabs = %w[Overview Features Scenarios Errors]
 config.report_title = 'Cucumber KasBon Automation Test Suite'
 config.compress_images = false
 config.additional_info = { 'Project name' => 'KasBon', 'Platform' => 'Mobile', 'Report generated' => time }
end
ReportBuilder.build_report


def default(data, filename)
    file = Axlsx::Package.new
    file.workbook.add_worksheet(name: filename) do |sheet|
      columns = ["name", "location", "status"]
      col_widths = Array.new(columns.count, 30)
      sheet.add_row columns
      data.each_with_index do |application, index|
        sheet.add_row [
                          application.try(:name),
                          application.try(:location),
                          application.try(:status)
                      ],
                      types: Array.new(columns.count, :string)
        p columns
      end
      sheet.column_widths *col_widths
    end
    file.use_shared_strings = true
    file.to_stream.read.force_encoding("BINARY")
  end