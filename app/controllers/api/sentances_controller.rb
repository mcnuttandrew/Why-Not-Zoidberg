class Api::SentancesController < ApplicationController
  def show
      @sentance = Sentance.find(params[:id])
      render :json => @sentance
  end

  def index
    @sentances = Sentance.all
    render :json => @sentances
  end

  protected
  def sentances_params
    params.require(:sentance).permit(:content)
  end
end
