<template>
	<div class="container mt-5 mb-5">
		<div class="row justify-content-center d-flex">
			<div
				class="col-md-6 border-right d-flex align-items-center justify-content-end"
			>
				<img alt="Vue logo" class="m-5 w-50" src="../assets/logo.png" />
			</div>
			<div
				class="col-md-6 d-flex align-items-center justify-content-start"
			>
				<div class="card m-5">
					<!-- Default form login -->
					<form
						class="text-center border border-light p-5"
						action="#!"
					>
						<p class="h4 mb-4">Zaloguj się</p>

						<!-- Email -->
						<input
							type="email"
							id="defaultLoginFormEmail"
							class="form-control mb-4"
							placeholder="E-mail"
						/>

						<!-- Password -->
						<input
							type="password"
							id="defaultLoginFormPassword"
							class="form-control mb-4"
							placeholder="Hasło"
						/>

						<div class="d-flex justify-content-around">
							<div>
								<!-- Remember me -->
								<div class="custom-control custom-checkbox">
									<input
										type="checkbox"
										class="custom-control-input"
										id="defaultLoginFormRemember"
									/>
									<label
										class="custom-control-label pr-3"
										for="defaultLoginFormRemember"
										>Zapamiętaj</label
									>
								</div>
							</div>
							<div>
								<!-- Forgot password -->
								<a href="" style="color: #00695c"
									>Zapomniałeś hasła?</a
								>
							</div>
						</div>

						<!-- Sign in button -->
						<button
							class="btn btn-warning btn-block my-4"
							type="submit"
						>
							Zaloguj się
						</button>

						<!-- Register -->
						<p>
							Nie jesteś z nami?
							<router-link to="/register">
								<a href="" style="color: #00695c"
									>Zarejestruj się</a
								>
							</router-link>
						</p>

						<!-- Social login -->
						<p class="mt-n4 pb-3">lub zaloguj z:</p>

						<a href="#" class="mx-2" role="button"
							><i
								class="fab fa-facebook-f"
								style="color: #00695c"
							></i
						></a>
						<a href="#" class="mx-2" role="button"
							><i class="fab fa-google" style="color: #00695c"></i
						></a>
					</form>
					<!-- Default form login -->
				</div>
			</div>
		</div>
	</div>
</template>



