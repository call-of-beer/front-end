<template>
	<div class="container mt-3 mb-3">
		<!-- Grid row -->

		<div class="row">
			<div class="col-md-12 mb-5 border-bottom pb-3">
				<h1>Moje grupy</h1>
				<a
					href=""
					style="color: #ffa900"
					data-toggle="modal"
					data-target="#exampleModal"
				>
					stwórz nową grupę
				</a>

				<!-- Modal -->
				<div
					class="modal fade"
					id="exampleModal"
					tabindex="-1"
					role="dialog"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title" id="exampleModalLabel ">
									Tworzenie nowej grupy
								</h5>
								<button
									type="button"
									class="close"
									data-dismiss="modal"
									aria-label="Close"
								>
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form>
									<!-- Name input -->
									<div class="form-outline mb-4">
										<input
											type="text"
											id="form4Example1"
											class="form-control"
										/>
										<label
											class="form-label"
											for="form4Example1"
											>Nazwa</label
										>
									</div>

									<!-- Email input -->
									<div class="form-outline mb-4">
										<input
											type="text"
											id="form4Example2"
											class="form-control"
										/>
										<label
											class="form-label"
											for="form4Example2"
											>Miejsce</label
										>
									</div>

									<!-- Message input -->
									<div class="form-outline mb-4">
										<textarea
											class="form-control"
											id="form4Example3"
											rows="4"
										></textarea>
										<label
											class="form-label"
											for="form4Example3"
											>Opis</label
										>
									</div>
								</form>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-warning">
									Dodaj
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-6">
				<div class="card mb-3">
					<div
						class="text-white text-center d-flex align-items-center rgba-indigo-strong py-5 px-4"
					>
						<div>
							<h5 class="text-warning">
								góry stołowe<i class="fas fa-beer ml-2"></i>
							</h5>
							<h3 class="card-title text-black pt-2">
								<strong>Wypad z ziomkami</strong>
							</h3>
							<p class="text-black">
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Repellat fugiat, laboriosam,
								voluptatem, optio vero odio nam sit officia
								accusamus minus error nisi architecto nulla
								ipsum dignissimos. Odit sed qui, dolorum!.
							</p>
							<router-link to="/GroupMore">
								<a class="btn btn-warning mr-2"
									><i
										class="fas fa-angle-right left mr-2"
									></i>
									więcej</a
								>
							</router-link>
							<a class="btn btn-warning mr-2"
								><i class="fas fa-trash left mr-2"></i> usuń</a
							>
						</div>
					</div>
				</div>
			</div>
			<!-- Grid column -->
		</div>
		<!-- Grid row -->
	</div>
</template>



