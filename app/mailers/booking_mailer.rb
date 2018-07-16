class BookingMailer < ApplicationMailer
  default from: 'mikeyule@devonholidayhouse.com'

  def booking_email
    @guests = params[:guests]
    @start = params[:start]
    @end = params[:end]
    @email = params[:email]
    @description = params[:description]
    @name = params[:name]
    mail(to: 'mikeyule@devonholidayhouse.com', subject: 'THIS IS A TEST OF THE OLD EMAIL')
  end

end
