class ChangeColumnName < ActiveRecord::Migration[5.0]
  def change
  	rename_column :users, :users, :username
  end
end
