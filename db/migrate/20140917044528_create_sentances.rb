class CreateSentances < ActiveRecord::Migration
  def change
    create_table :sentances do |t|
      t.text :content, null: false
      t.timestamps
    end
  end
end
