class AddTagsToPost < ActiveRecord::Migration[5.1]
  def change
    change_table :posts do |t|
      t.text :tags
    end
  end
end
