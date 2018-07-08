class Booking < ApplicationRecord
  validates :name, :guests, :start, :end, presence: true
  validates :email, email_format: { message: "must be valid" }

end
