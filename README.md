# FaceID with Siamese Neural Networks
Took a one-shot learning approach to create a model trained off of more than 10,000 pairs of images that can determine whether a pair of images contain the face of the same person or not. Used a Siamese network architecture to create embedding vectors in representation space for 2 images at a time. Minimized cost from contrastive loss using stochastic gradient descent. Optimized for precision to reduce false positives and achieved 85% precision on testing data.

What I Learned: Traditional mathematical models used for face recognition such as Eigenfaces, how to create custom loss functions, how to create neural networks in a siamese network achitecture, how to imbed Tensorflow model in web apps.
