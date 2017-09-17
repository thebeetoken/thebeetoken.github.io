class Api::EmailsController < ApplicationController
  def create
    @email = Email.new(email_params)

    debugger

    if @email.save
      render json: "Successful"
    else
      render json: @email.errors.full_messages, status: 422
    end
  end

  private

  def email_params
    params.require(:email).permit(:email_address)
  end

end
