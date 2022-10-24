class AddMonthAndDayToEvents < ActiveRecord::Migration[7.0]
  def change
    add_column :events, :month, :integer
    add_column :events, :day, :integer
  end
end
