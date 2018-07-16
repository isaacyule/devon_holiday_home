class BookingMailer < ApplicationMailer
  default from: 'mikeyule@devonholidayhouse.com'

  def booking_email
    @guests = params[:guests]
    @start = params[:start]
    @end = params[:end]
    @email = params[:email]
    @description = params[:description]
    @name = params[:name]
    mail(to: 'mikeyule@devonholidayhouse.com', subject: 'New Devon Holiday House booking request')
  end

end
