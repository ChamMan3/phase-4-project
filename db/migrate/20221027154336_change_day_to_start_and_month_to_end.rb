class ChangeDayToStartAndMonthToEnd < ActiveRecord::Migration[7.0]
  def change
    change_table :events do |t|
      t.rename :day, :start
      t.rename :month, :end
  end
end
  
  def up 
    change_column :events, :start, :string
  end

  def upup
    change_column :events, :end, string
  end


end
