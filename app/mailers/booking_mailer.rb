class BookingMailer < ApplicationMailer
  default from: 'isaac.k.yule@gmail.com'

  def booking_email
    @guests = params[:guests]
    @start = params[:start]
    @end = params[:end]
    @email = params[:email]
    @description = params[:description]
    @name = params[:name]
    mail(to: 'isaac.k.yule@gmail.com', subject: 'THIS IS A TEST OF THE OLD EMAIL')
  end

end
