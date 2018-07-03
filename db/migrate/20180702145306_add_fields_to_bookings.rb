class AddFieldsToBookings < ActiveRecord::Migration[5.1]
  def change
    add_column :bookings, :email, :string
    add_column :bookings, :guests, :integer
    add_column :bookings, :description, :text
    add_column :bookings, :start, :date
    add_column :bookings, :end, :date
    add_column :bookings, :name, :string
  end
end
