class Event < ApplicationRecord
    has_many :lists, dependent: :destroy 
    has_many :users, through: :lists
    
    validates :day, inclusion: 1..31
    validates :month, inclusion: 1..12
    validates :event_type, :name, presence: true
    validates :time, inclusion: 0000..2359

end
