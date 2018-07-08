class BookingsController < ApplicationController
  def new
    @booking = Booking.new
  end

  def create
    @booking = Booking.new(booking_params)

    if @booking.save
      BookingMailer.with(
        start: @booking.start,
        end: @booking.end,
        guests: @booking.guests,
        email: @booking.email,
        description: @booking.description,
        name: @booking.name
      ).booking_email.deliver_now
      redirect_to root_path
    else
      render :new
    end
  end

  private

  def booking_params
    params.require(:booking).permit(:name, :email, :guests, :start, :end, :description)
  end
end
