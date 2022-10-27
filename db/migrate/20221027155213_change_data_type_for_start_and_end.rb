class ChangeDataTypeForStartAndEnd < ActiveRecord::Migration[7.0]

  def up 
    change_table :events do |t|
      t.change :start, :string
      t.change :end, :string
    end
  end


  def down 
    change_table :events do |t|
      t.change :start, :integer
      t.change :end, :integer
    end
  end

end
