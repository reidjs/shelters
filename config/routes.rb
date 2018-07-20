Rails.application.routes.draw do
  scope '/api' do
    get :shelters, to: 'shelters#index'
  end
end
