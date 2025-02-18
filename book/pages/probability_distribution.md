(summary)=

# Probability distribution

**Summary.** A probability distribution is a function that describes how the values of a {doc}`random variable <random_variable>` are distributed. It provides the probabilities of different possible outcomes in a random process.

:::{div}
:class: tags-box

**Tags:** {doc}`probability density function <probability_density_function>` {doc}`random variable <random_variable>`

:::

<!-- hidden-tag:statistics --> 


## Definition

A probability distribution $P(x)$ is a function associated with a discrete random variable $x$, which assigns concrete probabilities $P(x = X)$ to unique outcomes $X$ of the random process associated with the random variable $x$. By definition, all probabilities of a random process must sum that one, that is to say $\sum_{X \in x} P(X) = 1$. Since probabilities also cannot be negative, that is to say $P(x) \geq 0$, this means that all probabilities of concrete outcomes must be between $0 \leq P(x) \leq 1$. 

Continuous random variables are instead associated with a {doc}`probability density function <probability_density_function>`.

## Intuition

The element below illustrates an example. Here, our random variable $x$ represents the height of a tree in a forest, selected at random. Since height is a continuous random variable, we discretize the system here by dividing $x$ into ten height brackets. The probabilities assigned with each height bracket can be derived by measuring the height of each tree in the forest, and dividing the number of trees in each bracket by the number of trees in the forest. Mind that by discretizing the height, we are changing the definition of the random value from *height of a random tree in the forest* to *adherence to a height bracket of a random tree in the forest*.

<div style="float: right; width: 100%; margin: 10px; border: 1px solid #ccc; border-radius: 8px; box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);">
    <iframe src="https://maxramgraber.github.io/MASTER/main/_static/elements/random_variable.html" style="width: 100%; aspect-ratio: 2 / 1; border: none; border-radius: 8px;"></iframe>
    <div style="text-align: justify; padding: 5px; font-size: 14px; font-family: Arial, sans-serif; color: #555;">
        <strong>Interactive element.</strong> Drag the grey circle on the left side to adjust the height of the tree. Observe how the random variable tree height and the associated height bracket in the probability distribution change.
    </div>
</div>

```{div} sticky-variable-table
### Nomenclature
| Variable  | Description  |
|-------|--------|
| $x$ | discrete random variable |
| $X$ | a specific outcome $X \in x$ |
| $P(x)$ | (discrete) probability distribution |
```

<div id="sticky-iframe-container" background="white">
  <button id="toggle-iframe">↔</button>
  <iframe id="sticky-iframe" src="https://maxramgraber.github.io/MASTER/main/_static/elements/navigation.html" style="width: 100%; aspect-ratio: 2 / 1; border: none; border-radius: 8px; background: white"></iframe>
</div>