<template>
	<div class="container">
		<div class="row justify-content-center d-flex">
			<div
				class="col-md-12 d-flex align-items-center justify-content-center"
			>
				<div class="card m-5">
					<!-- Default form login -->
					<form
						class="text-center border border-light p-5 ml-4 mr-4"
						action="#!"
					>
						<p class="h4 mb-4">Zarejestruj się</p>
						<input
							type="text"
							id="Registername"
							class="form-control mb-4"
							placeholder="Nazwa"
						/>
						<!-- Email -->
						<input
							type="email"
							id="RegisterEmail"
							class="form-control mb-4"
							placeholder="E-mail"
						/>

						<!-- Password -->
						<input
							type="password"
							id="RegisterPassword"
							class="form-control mb-4"
							placeholder="Hasło"
						/>
						<input
							type="Password"
							id="RegisterRepeatPassword"
							class="form-control mb-4"
							placeholder="Powtórz Hasło"
						/>

						<!-- Sign in button -->
						<button
							class="btn btn-warning btn-block my-4"
							type="submit"
						>
							Zarejestruj się
						</button>

						<!-- Register -->
						<p>
							Masz konto?
							<router-link to="/login">
								<a href="" style="color: #00695c"
									>Zaloguj się</a
								>
							</router-link>
						</p>

						<!-- Social login -->
						<p class="mt-n4 pb-3">lub skorzystaj z:</p>

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



