class RemoveFoodsTable < ActiveRecord::Migration[5.0]
  def change
    drop_table :foods
  end
end
