class Email < ActiveRecord::Base
  #TODO: Validations for Terms of Service, Confirmation, Email Format, Email Length
  #TODO: Constraints for Email Format
  validates :email_address, presence: true, uniqueness: true
end
