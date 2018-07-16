class AddBedColumnToShelters < ActiveRecord::Migration[5.0]
  def change
    add_column :shelters, :beds, :integer
  end
end
