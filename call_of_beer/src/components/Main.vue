<template>
	<div class="container">
		<div class="row">
			<div
				class="col-md-6 border-right d-flex align-items-center justify-content-center"
			>
				<img alt="Vue logo" class="h-75" src="../assets/logo.png" />
			</div>
			<div class="col-md-6">
				<div class="row ml-5">
					<div
						class="col-md-12 d-flex align-items-top mt-5 mb-5 justify-content-center pb-5 border-bottom"
						style="color: #ffa900"
					>
						<h1>Pij, Baw się, Przetrwaj</h1>
						<span id="rateMe1"></span>
					</div>

					<div class="row mt-4 mb-4">
						<div class="col-md-4 justify-content-center d-flex">
							<router-link to="/MyGroup">
								<button
									type="button"
									class="btn btn-warning btn-lg btn-block p-4 pr-5 pl-5"
								>
									MOJE GRUPY
								</button>
							</router-link>
						</div>
						<div class="col-md-4 justify-content-center d-flex">
							<button
								type="button"
								class="btn btn-warning btn-lg btn-block p-4 pr-5 pl-5"
							>
								DOŁĄCZ
							</button>
						</div>
						<div class="col-md-4 justify-content-center d-flex">
							<button
								type="button"
								class="btn btn-warning btn-lg btn-block p-4 pr-5 pl-5"
							>
								STATYSTYKI
							</button>
						</div>
					</div>
					<div class="row mt-5 justify-content-center d-flex">
						<div class="col-md-3 text-center">
							<h5>zalizone zgony</h5>
							<h1>1</h1>
						</div>
						<div class="col-md-3 text-center">
							<h5>wypite piwska</h5>
							<h1>53</h1>
						</div>
						<div class="col-md-3 text-center">
							<h5>ilość degustacji</h5>
							<h1>5</h1>
						</div>
						<div class="col-md-3 text-center">
							<h5>moje degustacje</h5>
							<h1>2</h1>
						</div>
					</div>
					<div class="row mt-5 mb-5 justify-content-center d-flex">
						<div class="col-md-12 text-center">
							<button
								type="button"
								class="btn btn-outline-warning btn-lg btn-block p-4"
							>
								BAZA PIW
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>



