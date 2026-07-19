// Custom problems, prepared by Caden

let problems = [
	{
		"title": "Quadratic Formula",
		"description": "Classic.",
		"latex": String.raw`x = \dfrac{-b\pm\sqrt{b^2-4ac}}{2a}`
	},
	{
		"title": "Pythagorean Theorem",
		"description": "Classic.",
		"latex": String.raw`c = \sqrt{a^2+b^2}`
	},
	{
		"title": String.raw`Sum of first \(n\) Squares`,
		"description": "Classic.",
		"latex": String.raw`\sum_{i=1}^n i^2 = \frac{n(n+1)(2n+1)}{6}`
	},
	{
		"title": "Law of Cosines",
		"description": "Classic.",
		"latex": String.raw`c^2 = a^2 + b^2 - 2ab \cos \angle C`
	},
	{
		"title": "Legendre's formula",
		"description": "Floors.",
		"latex": String.raw`\nu_p(n!) = \sum_{i = 1}^{\infty} \left \lfloor \dfrac{n}{p^i} \right \rfloor`
	},
	{
		"title": "Euler's Identity",
		"description": "The most beautiful equation in mathematics.",
		"latex": String.raw`e^{\pi i} + 1 = 0`
	},
	{
		"title": "Euler's Lesser-Known Identity",
		"description": "Troll.",
		"latex": String.raw`\lceil e \rceil - \lfloor \pi \rfloor = 0`
	},
	{
		"title": "Normal Distribution",
		"description": "Thanks to Martin for correcting this!",
		"latex": String.raw`\Phi(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{(x - \mu)^2}{2\sigma^2}}`
	},
	{
		"title": "Fourier Transform",
		"description": "17 Equations That Changed the World.",
		"latex": String.raw`\hat{f}(\omega) = \int_{-\infty}^\infty f(x) e^{-2\pi i x \omega} \mathrm dx`
	},
	{
		"title": "Wave Equation",
		"description": "17 Equations That Changed the World.",
		"latex": String.raw`\frac{\partial^2u}{\partial t^2} = c^2 \frac{\partial^2 u}{\partial x^2}`
	},
	{
		"title": "Navier-Stokes Equation",
		"description": "17 Equations That Changed the World.",
		"latex": String.raw`\rho \left ( \frac{\partial \mathbf{v}}{\partial t} + \mathbf{v} \cdot \nabla \mathbf{v} \right) = - \nabla p + \nabla \cdot \mathbf{T} + \mathbf{f}`
	},
	{
		"title": "Schrodinger's Equation",
		"description": "17 Equations That Changed the World.",
		"latex": String.raw`i\hbar\frac{\partial}{\partial t} \Psi = H \Psi`
	},
	{
		"title": "Black-Scholes Equation",
		"description": "17 Equations That Changed the World.",
		"latex": String.raw`\frac{\partial V}{\partial t} + \frac{1}{2} \sigma^2 S^2 \frac{\partial^2V}{\partial S^2} + rS \frac{\partial V}{\partial S} - rV = 0`
	},
	{
		"title": "Relativity",
		"description": "17 Equations That Changed the World.",
		"latex": String.raw`E=mc^2`
	},
	{
		"title": "Chaos Theory",
		"description": "17 Equations That Changed the World.",
		"latex": String.raw`x_{t+1} = k x_t (1 - x_t)`
	},
	{
		"title": "Definition of the Derivative",
		"description": "17 Equations That Changed the World.",
		"latex": String.raw`\frac{\mathrm df}{\mathrm dx} = \lim_{h \to 0} \frac{f(x + h) - f(x)}{h}`
	},
	{
		"title": "Euler's Formula for Polyhedra",
		"description": "17 Equations That Changed the World.",
		"latex": String.raw`V - E + F = 2`
	},
	{
		"title": "Gravitation",
		"description": "17 Equations That Changed the World.",
		"latex": String.raw`F = \frac{Gm_1m_2}{d^2}`
	},
	{
		"title": "AM-GM",
		"description": "Fun",
		"latex": String.raw`\frac{x_1 + x_2 + \cdots + x_n}{n} \ge \sqrt[n]{x_1 \cdot x_2 \cdots x_n}`
	},
	{
		"title": "Stirling's Approximation",
		"description": "Fun",
		"latex": String.raw`n! \approx \sqrt{2\pi n} \left ( \frac{n}{e}\right )^n`
	},
	{
		"title": "Stokes' Theorem",
		"description": "Fun",
		"latex": String.raw`\iint_S \nabla \times \mathbf{F} \cdot \mathrm d\mathbf{S} = \oint_\Gamma \mathbf{F} \cdot \mathrm d \mathbf{\Gamma} `
	},
	{
		"title": "Divergence Theorem",
		"description": "Fun",
		"latex": String.raw`\iiint_V (\nabla \cdot \mathbf{F}) \mathrm dV = \oiint_S (\mathbf{F} \cdot \mathbf{n}) \mathrm dS`
	},
	{
		"title": "Cauchy-Schwarz Inequality",
		"description": "Fun",
		"latex": String.raw`|\langle \mathbf{u}, \mathbf{v} \rangle|^2 \le \langle \mathbf{u}, \mathbf{u} \rangle \cdot \langle \mathbf{v} , \mathbf{v} \rangle`
	},
	{
		"title": "Area of a Circle",
		"description": "Simple",
		"latex": String.raw`A = \pi r^2`
	},
	{
		"title": String.raw`Definition of \(\tau\)`,
		"description": "Troll.",
		"latex": String.raw`\tau = 2\pi`
	},
	{
		"title": "Sophie Germain Identity",
		"description": "Simple.",
		"latex": String.raw`a^4 + 4b^4 = (a^2 + 2ab + 2b^2)(a^2 -2ab + 2b^2)`
	},
	{
		"title": "Pascal's Identity",
		"description": "Classic.",
		"latex": String.raw`\binom{n}{k} = \binom{n-1}{k} + \binom{n-1}{k-1}`
	},
	{
		"title": "Hockey-stick Identity",
		"description": "Classic.",
		"latex": String.raw`\sum_{i=r}^n \binom{i}{r} = \binom{n+1}{r+1}`
	},
	{
		"title": "Vandermonde's Identity",
		"description": "Classic.",
		"latex": String.raw`\binom{m + n}{r} = \sum_{k = 0}^r \binom{m}{k} \binom{n}{r-k}`
	},
	{
		"title": "Combinations",
		"description": "Simple.",
		"latex": String.raw`\binom{n}{k} = \frac{n!}{k!(n-k)!}`
	},
	{
		"title": "Heine's Identity",
		"description": "No idea what this is. Looks cool tho.",
		"latex": String.raw`\frac{1}{\sqrt{z - \cos \psi}} = \frac{\sqrt{2}}{\pi} \sum_{m = -\infty}^\infty Q_{m - \frac{1}{2}}(z) e^{im\psi}`
	},
	{
		"title": "Binomial identity",
		"description": "Classic.",
		"latex": String.raw`(x + y)^n = \sum_{k=0}^n \binom{n}{k} x^{n-k} y^k`
	},
	{
		"title": "Hermite's Identity",
		"description": "Hadn't heard of this either.",
		"latex": String.raw`\sum_{k=0}^{n-1} \left \lfloor x + \frac{k}{n} \right \rfloor = \lfloor nx \rfloor`
	},
	{
		"title": "Matrix Determinant Lemma",
		"description": "Or this lmao.",
		"latex": String.raw`\det (\mathbf{A} + \mathbf{u}\mathbf{v}^{\intercal}) = (1 + \mathbf{v}^\intercal \mathbf{A}^{-1} \mathbf{u}) \det (\mathbf{A})`
	},
	{
		"title": "Euler Product of the Riemann-Zeta function",
		"description": "Classic.",
		"latex": String.raw`\zeta(s) = \sum_{n=1}^\infty \frac{1}{n^s} = \prod_{p \in \mathbb{P}} \frac{1}{1 - p^{-s}}`
	},
	{
		"title": "Irrationality of the Square Root of 2",
		"description": "I just really wanted to keep using \\mathbb.",
		"latex": String.raw`\sqrt{2} \notin \mathbb{Q}`
	},
	{
		"title": "Heron's Formula",
		"description": "Classic.",
		"latex": String.raw`[\triangle ABC] = \sqrt{s(s-a)(s-b)(s-c)}`
	},
	{
		"title": "Heisenberg's Uncertainty Principle",
		"description": "Classic.",
		"latex": String.raw`\Delta x \Delta p \approx \hbar`
	},
	{
		"title": String.raw`Continued Fraction for \(\pi/2\)`,
		"description": "@InertialObservr",
		"latex": String.raw`\frac{\pi}{2} = 1 + \frac{1}{1 + \frac{1}{\frac{1}{2} + \frac{1}{\frac{1}{3} + \frac{1}{\frac{1}{4} + \ddots}}}}`
	},
	{
		"title": "Sophomore's Dream",
		"description": "Cool.",
		"latex": String.raw`\int_0^1 x^{-x} \mathrm dx = \sum_{n=1}^\infty n^{-n}`
	},
	{
		"title": String.raw`Identity involving \(\pi\) and \(e\)`,
		"description": "@InertialObservr",
		"latex": String.raw`\prod_{n=2}^\infty e \left (1 - \frac{1}{n^2} \right)^{n^2} = \frac{\pi}{e \sqrt{e}}`
	},
	{
		"title": "Representation of the Golden Ratio",
		"description": "Classic",
		"latex": String.raw`\phi = \sqrt{1 + \sqrt{1 + \sqrt{1 + \sqrt{1 + \cdots}}}}`
	},
	{
		"title": "The Sum of all Positive Integers",
		"description": "Troll.",
		"latex": String.raw`\sum_{n = 1}^\infty n = -\frac{1}{12}`
	},
	{
		"title": "Inverse of a complex number",
		"description": "Gotta know \\bar man",
		"latex": String.raw`z^{-1} = \frac{\bar{z}}{|z|^2}, \forall z \neq 0`
	},
	{
		"title": "Definition of Convolution",
		"description": "Shout out to 6.003",
		"latex": String.raw`(f * g)(t) = \int_{-\infty}^\infty f(\tau) g(t - \tau) \mathrm d\tau`
	},
	{
		"title": "Definition of the Kronecker Delta function",
		"description": "{cases} ftw",
		"latex": String.raw`\delta_{i,j} = \begin{cases} 0 & i \neq j \\ 1 & i = j \end{cases}`
	},
	{
		"title": "Bayes' Theorem",
		"description": "bae's theorem",
		"latex": String.raw`P(A | B) = \frac{P(B|A)P(A)}{P(B)}`
	},
	{
		"title": String.raw`Probability Density Function of the Student's \(t\)-distribution`,
		"description": "fun",
		"latex": String.raw`f(t) = \frac{\Gamma \left ( \frac{\nu + 1}{2} \right )}{\sqrt{\nu \pi} \Gamma \left ( \frac{\nu}{2}\right)} \left ( 1 + \frac{t^2}{\nu} \right) ^{- \frac{\nu + 1}{2}}`
	},
	{
		"title": "De Morgan's laws",
		"description": "fun",
		"latex": String.raw`\neg (P \wedge Q ) \vdash (\neg P) \vee (\neg Q)`
	},
	{
		"title": "Principle of Inclusion-Exclusion",
		"description": "for dummies",
		"latex": String.raw`|A \cup B| = |A| + |B| - |A \cap B|`
	},
	{
		"title": "General Principle of Inclusion-Exclusion",
		"description": "for galaxy brains",
		"latex": String.raw`\left | \bigcup_{i = 1}^n A_i \right | = \sum_{\emptyset \neq J \subseteq \{1, \dots, n\}} (-1)^{|J| + 1} \left | \bigcap_{j \in J} A_j \right |`
	},
	{
		"title": String.raw`Determinant of a \(2 \times 2\) matrix`,
		"description": "{matrix}",
		"latex": String.raw`\det \begin{bmatrix} a & b \\ c & d \end{bmatrix} = ad - bc`
	},
	{
		"title": "Sawtooth Function",
		"description": "mathbb cases floors, this has it all",
		"latex": String.raw`S(x) = \begin{cases} x - \lfloor x \rfloor - 1/2 & x \in \mathbb{R} \setminus \mathbb{Z} \\ 0 & x \in \mathbb{Z} \end{cases}`
	},
	{
		"title": "Definition of Graham's Number",
		"description": "G = g_{64}",
		"latex": String.raw`g_n = \begin{cases} 3 \uparrow \uparrow \uparrow \uparrow 3 & n = 1 \\ 3 \uparrow^{g_{n-1}} 3 & n \ge 2,n \in \mathbb{N} \end{cases}`
	},
	{
		"title": "Burnside's Lemma",
		"description": "The Lemma that is not Burnside's",
		"latex": String.raw`|X/G| = \frac{1}{|G|} \sum_{g \in G} |X^g|`
	},
	{
		"title": "Continuum Hypothesis",
		"description": "independent of ZFC!",
		"latex": String.raw`\aleph_0 = |\mathbb{N}|, \mathfrak{c} = |\mathbb{R}| \\ \nexists A : \aleph_0 < |A| < \mathfrak{c}`
	},
	{
		"title": "Spectral Decomposition",
		"description": "derived from memory",
		"latex": String.raw`A = \begin{pmatrix} | & | & & | \\ \mathbf v_1 & \mathbf v_2 & \cdots & \mathbf v_n \\ | & | & & | \end{pmatrix} \begin{pmatrix} \lambda_1 & & & \\ & \lambda_2 & & \\ & & \ddots & \\ & & & \lambda_n \end{pmatrix} \begin{pmatrix} | & | & & | \\ \mathbf v_1 & \mathbf v_2 & \cdots & \mathbf v_n \\ | & | & & | \end{pmatrix} ^ {-1}`
	},
	{
		"title": "Pythagorean Identity",
		"description": "basically just the Pythagorean theorem",
		"latex": String.raw`\sin^2 \theta + \cos^2 \theta = 1`
	},
	{
		"title": "Double Angle for \sin",
		"description": "back to basics",
		"latex": String.raw`\sin(2\theta) = 2\sin(\theta)\cos(\theta)`
	},
	{
		"title": "Double Angle for \cos",
		"description": "back to basics",
		"latex": String.raw`\cos(2\theta) = \cos^2(\theta) - \sin^2(\theta)`
	},
	{
		"title": "Fermat's Last Theorem",
		"description": "have a marvelous proof, but this description's too small to contain it",
		"latex": String.raw`\nexists \{x,y,z,n\} \in \mathbb{N}, n > 2 : x^n + y^n = z^n`
	},
	{
		"title": "Fermat's Little Theorem",
		"description": "fermat's itty bitty theorem",
		"latex": String.raw`a^p \equiv a \pmod{p}`
	},
	{
		"title": "Euler's Theorem",
		"description": "totients",
		"latex": String.raw`\gcd(a, n) = 1 \implies a^{\varphi(n)} \equiv 1 \pmod{n}`
	},
	{
		"title": "QM-AM-GM-HM Inequality over 3 variables",
		"description": "cool-looking",
		"latex": String.raw`\sqrt{\frac{a^2 + b^2 + c^2}{3}} \ge \frac{a + b + c}{3} \ge \sqrt[3]{abc} \ge \frac{3}{\frac{1}{a} + \frac{1}{b} + \frac{1}{c}}`
	},
	{
		"title": "Extended Law of Sines",
		"description": "threw in the circumradius as well",
		"latex": String.raw`\frac{a}{\sin \angle A} = \frac{b}{\sin \angle B} = \frac{c}{\sin \angle C} = 2R`
	},
	{
		"title": "Integration by Parts",
		"description": "it's just the product rule really",
		"latex": String.raw`\int u\mathrm dv = uv - \int v \mathrm du`
	},
	{
		"title": "Definition of Perfect Numbers",
		"description": "shrug",
		"latex": String.raw`\left \{ n : \sum_{d | n}^{d<n} d  = n\right \}`
	},
	{
		"title": "Gaussian Integral",
		"description": "classic trick",
		"latex": String.raw`\int_{-\infty}^\infty e^{-x^2} \mathrm dx = \sqrt{\int_{-\infty}^\infty \int_{-\infty}^\infty  e^{-x^2 - y^2} \mathrm dx\mathrm dy} = \sqrt{\int_0^{2\pi} \int_0^\infty e^{-r^2}r\mathrm dr\mathrm d\theta } = \sqrt{\pi}`
	},
	{
		"title": "Definition of an Integral",
		"description": "why not",
		"latex": String.raw`\int_a^b f(x) \mathrm dx = \lim_{k \to \infty} \left ( (b-a) \sum_{i = 1}^{k} \frac{f(a + i\frac{b-a}{k})}{k} \right )`
	},
	{
		"title": "Quantum Fourier transform",
		"description": "bra ket notation is fun",
		"latex": String.raw`|x\rangle \mapsto \frac{1}{\sqrt{N}} \sum_{k = 0}^{N-1} \omega_x^k |k\rangle`
	},
	{
		"title": "Recursive definition of the Hadamard transform",
		"description": "matrix in cases",
		"latex": String.raw`H_m = \begin{cases} 1 & m = 0 \\ \frac{1}{\sqrt{2}}\begin{pmatrix} H_{m-1} & H_{m-1} \\ H_{m-1} & -H_{m-1}\end{pmatrix} & m > 0\end{cases}`
	},
	{
		"title": "Wigner Transform of the Density Matrix",
		"description": "I know some of these words",
		"latex": String.raw`W(x,p) = \frac{1}{\pi \hbar} \int_{-\infty}^\infty \langle x + y | \hat{\rho} | x - y \rangle e^{-2ipy/\hbar} \mathrm dy`
	},
	{
		"title": "Imaginary numbers",
		"description": "Just gonna add some simple formulas",
		"latex": String.raw`i^2 = -1`
	},
	{
		"title": "Sum of Cubes",
		"description": "Simple",
		"latex": String.raw`a^3 + b^3 = (a+b)(a^2 - ab + b^2)`
	},
	{
		"title": "RSA Decryption Algorithm",
		"description": "good ol' rivest",
		"latex": String.raw`m = c^{e^{-1}\bmod \phi(n)} \pmod n`
	},
	{
		"title": "Contraposition",
		"description": "logic yo",
		"latex": String.raw`(p \implies q) \iff (\neg q \implies \neg p)`
	},
	{
		"title": "Equation of a spring",
		"description": "Gonna use dots like the physicists do",
		"latex": String.raw`m \ddot{x} = -kx`
	},
	{
		"title": String.raw`Sum of reciprocals of partial sums of \(\ \mathbb{N}\)`,
		"description": "Credit to @IntertialObservr",
		"latex": String.raw`\sum_{i = 2}^\infty \frac{1}{\sum_{j = 1}^i j} = 1`
	},
	{
		"title": "Binet's Formula",
		"description": "Classic",
		"latex": String.raw`F_n = \frac{1}{\sqrt{5}} \left ( \varphi^n  - \frac{(-1)^n}{\varphi^n}\right )`
	},
	{
		"title": String.raw`Sum of first \(n\) Cubes`,
		"description": "Classic",
		"latex": String.raw`\sum_{k = 0}^n k^3 = \left ( \sum_{k = 0}^n k\right )^2`
	},
	{
		"title": "The Basel Problem",
		"description": "Classic",
		"latex": String.raw`\sum_{n = 1}^\infty \dfrac{1}{n^2} = \dfrac{\pi^2}{6}`
	},
	{
		"title": "Root Mean Square",
		"description": "how could i forget",
		"latex": String.raw`f_{\text{rms}} = \sqrt{\frac{1}{T_2 - T_1} \int_{T_1}^{T_2} [f(t)]^2 \mathrm dt}`
	},
	{
		"title": "The Harmonic Series",
		"description": "Classic",
		"latex": String.raw`\sum^\infty_{n=1} \frac{1}{n} = \infty`
	},
	{
		"title": "Tupper's Self-Referential Formula",
		"description": "Troll",
		"latex": String.raw`\frac{1}{2}<\left\lfloor\bmod\left(\left\lfloor\frac{y}{17}\right\rfloor 2^{-17\lfloor x \rfloor - \bmod(\lfloor y \rfloor,17)},2\right)\right\rfloor`
	},
	{
		"title": String.raw`H\(\ddot\textbf{o}\)lder's Inequality`,
		"description": "Styled like the OTIS handouts by Evan Chen",
		"latex": String.raw`\left(\sum_{i = 1}^n a_i\right)^p\left(\sum_{i = 1}^n b_i\right)^q \ge \left(\sum_{i = 1}^n \sqrt[p+q]{a_i^p b_i^q}\right)^{p+q}`
	},
	{
		"title": "Rearrangement Inequality",
		"description": "kinda cool",
		"latex": String.raw`a_1 \le a_2 \le \cdots \le a_n, b_1 \le b_2 \le \cdots \le b_n \implies \sum_{i=1}^n a_ib_i \ge \sum_{i=1}^n a_{\sigma(i)}b_i \ge \sum_{i=1}^n a_{n+1-i}b_i`
	},
	{
		"title": "Power Mean",
		"description": "like RMS-AM-GM-HM but like generalized",
		"latex": String.raw`M_r(x_1,x_2,\dots,x_n) = \begin{cases} \left(\frac{1}{n}\sum_{i=1}^n x_i^r\right)^{1/r} & r \ne 0 \\ \sqrt[n]{\prod_{i=1}^n x_i} & r = 0 \end{cases}`
	},
	{
		"title": "Law of Tangents",
		"description": "yes this actually exists",
		"latex": String.raw`\frac{a-b}{a+b} = \frac{\tan\left(\frac{\angle A - \angle B}{2}\right)}{\tan\left(\frac{\angle A + \angle B}{2}\right)}`
	},
	{
		"title": "Euler's Arctangent Identity",
		"description": "dammit euler OP",
		"latex": String.raw`\tan^{-1} \left(\frac{1}{x}\right) =  \tan^{-1} \left(\frac{1}{x+y}\right) + \tan^{-1}\left(\frac{y}{x^2 + xy + 1}\right)`
	},
	{
		"title": "The Dirichlet Convolution",
		"description": "bruh",
		"latex": String.raw`(f \ast g)(n) = \sum_{d | n} f(d)g\left(\frac{n}{d}\right)`
	},
	{
		"title": "Sum of a Row of Pascal's Triangle",
		"description": "not sure how else to word it",
		"latex": String.raw`\binom{n}{0} + \binom{n}{1} + \binom{n}{2} + \cdots + \binom{n}{n} = 2^n`
	},
	{
		"title": "Alternating Harmonic Series",
		"description": "First use of \ln",
		"latex": String.raw`1 - \frac 12 + \frac 13 - \frac 14 + \frac 15 - \cdots = \ln 2`
	},
	{
		"title": "Definitions of Catalan's Constant",
		"description": "Credit to /u/heropup",
		"latex": String.raw`G = \beta(2) = \sum_{k=0}^\infty \frac{(-1)^k}{(2k+1)^2} = \iint_{[0,1]^2} \frac{\mathrm dx \mathrm dy}{1 + x^2 y^2}`
	},
	{
		"title": String.raw`Series Representation of Ap\(\acute\textbf{e}\)ry's Constant`,
		"description": "Credit to /u/heropup",
		"latex": String.raw`\zeta(3) = \frac{5}{2} \sum_{n=1}^\infty \frac{(-1)^{n-1}}{n^3 \binom{2n}{n}}`
	},
	{
		"title": "Definition of the Euler-Mascheroni Constant",
		"description": "Credit to /u/heropup",
		"latex": String.raw`\gamma = \lim_{n \to \infty} \left(\sum_{k=1}^n \frac{1}{k} - \ln n \right) = \int_1^\infty  \left(\frac{1}{\lfloor x \rfloor } - \frac{1}{x} \right) \mathrm dx`
	},
	{
		"title": "Mertens' therorem",
		"description": "actually his third theorem",
		"latex": String.raw`\prod_{p \in \mathbb P}^n \left(1-\frac 1 p \right)\sim \frac{e^{-\gamma}}{\log n}`
	},
	{
		"title": "Green's First Identity",
		"description": "Credit to Varge",
		"latex": String.raw`\int_{\Omega} (\psi \Delta \varphi + \nabla \psi \cdot \nabla \varphi) \mathrm dV = \oint_{\partial \Omega} \psi(\nabla \varphi \cdot \mathbf{n}) \mathrm dS`
	},
	{
		"title": "Cauchy-Riemann Equations",
		"description": "complex analysis is best analysis (1); credit to blu_bird",
		"latex": String.raw`\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}, \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}`
	},
	{
		"title": "Cauchy's Integral Formula",
		"description": "complex analysis is best analysis (2); credit to blu_bird",
		"latex": String.raw`f(z_0) = \frac{1}{2\pi i}\oint_{\Gamma} \frac{f(z)}{z-z_0} \mathrm{d}z`
	},
	{
		"title": "Cauchy's Differentiation Formula",
		"description": "complex analysis is best analysis (3); credit to blu_bird",
		"latex": String.raw`f^{(k)}(z_0) = \frac{k!}{2\pi i}\oint_{\Gamma} \frac{f(z)}{(z-z_0)^{k+1}} \mathrm{d}z`
	},
	{
		"title": "Functional Equation for the Riemann-Zeta Function",
		"description": "This is the simplest example of a functional equation in the Langlands program. Conjecturally all Hasse-Weil zeta functions have Euler factorizations and functional equations with the Riemann zeta function as just one example.",
		"latex": String.raw`\pi^{-s/2}\Gamma\left(\frac{s}{2}\right)\zeta(s) = \pi^{-(1-s)/2}\Gamma\left(\frac{1-s}{2}\right)\zeta(1-s)`
	},
	{
		"title": "Well-ordering Principle",
		"description": "Classic. Credit to Eucrue",
		"latex": String.raw`\forall M(M\subset \mathbb N \wedge M \ne \emptyset \implies \exists m_0 [ m_0 \in M \wedge \forall n (n \in M \implies m \le n)])`
	},
	{
		"title": "Asymptotic Formula for the Dirichlet Divisor Function",
		"description": "very cool dirichlet",
		"latex": String.raw`\sum_{n \leq x} \tau(n) = x \log x + (2\gamma -1)x + O(\sqrt{x})`
	},
	{
		"title": "Prime Number Theorem",
		"description": "trivial",
		"latex": String.raw`\pi(x) \sim \frac{x}{\log x}`
	},
	{
		"title": "Cumulative Distribution Function of the Gaussian Distribution",
		"description": "dense",
		"latex": String.raw`\Phi(x) = \frac{1}{\sqrt{2\pi}}\int_{-\infty}^x e^{-t^2/2} \mathrm{d}t`
	},
	{
		"title": "Chernoff Bound",
		"description": "I never really learned what this was",
		"latex": String.raw`\mathbb{P}(X \ge t) \leq \frac{\mathbb{E}[e^{\lambda X}]}{e^{\lambda t}}`
	},
	{
		"title": "Union Bound",
		"description": "Never learned what this was either",
		"latex": String.raw`\mathbb{P}\left(\bigcup_{i=1}^n X_i\right) \leq \sum_{i=1}^n \mathbb{P}(X_i)`
	},
	{
		"title": "Law of Total Probability",
		"description": "shrug",
		"latex": String.raw`\mathbb{P}(A) = \sum_{i=1}^n \mathbb{P}(A| B_i)\mathbb{P}(B_i)`
	},
	{
		"title": "Linear Least Squares Estimator",
		"description": "i love regression analysis",
		"latex": String.raw`L[X|Y] = \mathbb{E}[X] + \frac{\mathrm{cov}(X,Y)}{\mathrm{var}(Y)} (Y-\mathbb{E}[Y])`
	},
	{
		"title": "Rademacher Complexity",
		"description": "The empirical Rademacher complexity of a function class",
		"latex": String.raw`\mathcal{R}_n(\mathcal{F}) = \mathbb{E}_{\varepsilon}\left[\sup_{f \in \mathcal{F}}\frac{1}{n}\sum_{i=1}^{n}\varepsilon_if(x_i) \right ]`
	},
	{
		"title": "Definition of the Dilogarithm",
		"description": "aka Spence's function. don't wanna be accused of sleeping on spence",
		"latex": String.raw`\mathrm{Li}_2(z) = -\int_0^z \frac{\log(1-t)}{t}\mathrm{d}t, z \in \mathbb C`
	},
	{
		"title": "Leibniz's Determinant Formula",
		"description": "Determinant of an n by n matrix",
		"latex": String.raw`\det(A)=\sum_{\sigma\in S_n} \epsilon(\sigma)\prod_{i=1}^n A_{i,\sigma(i)}`
	},
	{
		"title": "Euler-Lagrange Equations",
		"description": "The basis for all of Lagrangian mechanics",
		"latex": String.raw`\frac{\partial L}{\partial q_i}=\frac{\mathrm d}{\mathrm dt}\frac{\partial L}{\partial \dot{q_i}}`
	},
	{
		"title": "Definition of the Euler Totient Function",
		"description": "what does totient mean anyways?",
		"latex": String.raw`\varphi(n)=|\{k\in\mathbb{N}_{\leq n}|\gcd(k,n)=1\}|=n\prod_{p|n}\left(1-\frac1p\right)`
	},
	{
		"title": "Sum of Divisors",
		"description": "i guess this person likes multiplicative functions",
		"latex": String.raw`\sigma(n)=\sum_{d|n} d = \prod_{p^a||n}\left(\frac{p^{a+1}-1}{p-1}\right)`
	},
	{
		"title": "Einstein Field Equations",
		"description": "This form makes use of the Einstein tensor",
		"latex": String.raw`G_{\mu\nu}+\Lambda g_{\mu\nu} = \frac{8\pi G}{c^4}T_{\mu\nu}`
	},
	{
		"title": "Second Fundamental Theorem of Calculus",
		"description": "credit to VBG",
		"latex": String.raw`\int_a^b f(x)\mathrm{d}x=[F(x)]_{a}^{b}=F(b)-F(a)`
	},
	{
		"title": "Abel's Summation Formula",
		"description": "unclear to me why this is at all useful tbh",
		"latex": String.raw`\sum_{x < n \leq y} a(n)f(n) = A(y)f(y) - A(x)f(x) - \int_x^y A(t)f'(t) \mathrm dt`
	},
	{
		"title": "Lagrange's Theorem",
		"description": "more group theory",
		"latex": String.raw`(G:H) = \frac{|G|}{|H|}`
	},
	{
		"title": "Catalan Numbers",
		"description": "A000108",
		"latex": String.raw`C_n = \sum_{k=1}^{n-1} C_kC_{n-k-1} = \frac{1}{n+1}\binom{2n}{n}`
	},
	{
		"title": "Ising Model Hamiltonian",
		"description": "Mathematical model of ferromagnetism",
		"latex": String.raw`H(\sigma )=-\sum _{\langle i,j\rangle }J_{ij}\sigma _{i}\sigma _{j}-\mu \sum _{j}h_{j}\sigma _{j}`
	},
	{
		"title": "Borwein Integral",
		"description": "The pattern famously breaks down after this integral.",
		"latex": String.raw`\int_0^\infty \frac{\sin(x)}{x}\frac{\sin(x/3)}{x/3}\cdots\frac{\sin(x/13)}{x/13}\mathrm dx=\frac{\pi}{2}`
	},
	{
		"title": "Wigner Semicircle Distribution",
		"description": "Essentially just a semicircle scaled to be a probability distribution.",
		"latex": String.raw`f(x)=\begin{cases}{2 \over \pi R^2}\sqrt{R^2-x^2}&-R\le x\le R\\ 0&|x|>R\end{cases}`
	},
	{
		"title": "Parseval Gutzmer Formula",
		"description": "Apply the Cauchy Integral Formula to derive",
		"latex": String.raw`f(z)=\sum_{k=0}^\infty a_kz^k\implies \frac{1}{2\pi}\int_0^{2\pi}|f(re^{i\theta})|^2\mathrm d\theta=\sum_{k=0}^\infty |a_kr^k|^2`
	},
	{
		"title": "Fubini's Theorem",
		"description": "switching the order of integration ftw",
		"latex": String.raw`\int _{X}\left(\int _{Y}f(x,y) \mathrm dy\right) \mathrm dx=\int _{Y}\left(\int _{X}f(x,y) \mathrm dx\right) \mathrm dy=\int _{{X\times Y}}f(x,y)\mathrm d(x,y)`
	},
	{
		"title": "Coarea Formula",
		"description": "A generalization of Fubini's theorem",
		"latex": String.raw`\int _{\Omega }g(x)|\nabla u(x)|\mathrm dx=\int _{\mathbb {R} }\left(\int _{u^{-1}(t)}g(x)\mathrm dH_{n-1}(x)\right)\mathrm dt`
	},
	{
		"title": "Equation of a Torus",
		"description": "yum, donuts",
		"latex": String.raw`(\sqrt{x^2 + y^2} - R)^2 + z^2 = r`
	},
	{
		"title": "Ampère-Maxwell law",
		"description": "credit to Andrija",
		"latex": String.raw`\nabla \times \mathbf{B} = \mu_0\left(\mathbf{J} + \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t}\right)`
	},
	{
		"title": "Gauss's Flux Theorem (differential form)",
		"description": "guess we're doing all of Maxwell's equations now huh",
		"latex": String.raw`\nabla \cdot \mathbf{E} = \frac{\rho}{\varepsilon_0}`
	},
	{
		"title": "Gauss's law for Magnetism",
		"description": "I'll need to fix this once we discover magnetic monopoles.",
		"latex": String.raw`\nabla \cdot \mathbf{B} = 0`
	},
	{
		"title": "Maxwell–Faraday equation",
		"description": "induction",
		"latex": String.raw`\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}`
	},
	{
		"title": "Eigenvalue Formula",
		"description": "this yields the characteristic polynomial",
		"latex": String.raw`\det(\mathbf{A} - \lambda \mathbf{I}) = 0`
	},
	{
		"title": "Collatz Function",
		"description": "The conjecture is that repeated applications of this function always hit 1.",
		"latex": String.raw`f(n) = \begin{cases} n/2 & n \equiv 0 \pmod 2 \\ 3n + 1 & n \equiv 1 \pmod 2 \end{cases}`
	},
	{
		"title": "Gamma Function",
		"description": "A generalization of the factorial function",
		"latex": String.raw`\Gamma(z) = \int_0^\infty x^{z - 1}e^{-x} \mathrm dx`
	},
	{
		"title": "Laplace Transform",
		"description": "signals and systems baby",
		"latex": String.raw`\mathcal{L}\{f\}(s) = \int_0^\infty f(t) e^{-st} \mathrm dt`
	},
	{
		"title": "Taylor Series",
		"description": "When a = 0, it's a Maclaurin series",
		"latex": String.raw`f(x) = \sum_{n = 0}^\infty \frac{f^{(n)}(a)}{n!} (x - a)^n`
	},
	{
		"title": "Quaternion Multiplication Formula",
		"description": "Hamilton famously carved this formula into the stone of a bridge when he came up with it.",
		"latex": String.raw`\mathbf i^2 = \mathbf j^2 = \mathbf k^2 = \mathbf i\mathbf j\mathbf k = -1`
	},
	{
		"title": "General Solution to First-Order Linear Differential Equations",
		"description": "You can derive this with an integrating factor. ",
		"latex": String.raw`y = e^{-\int P(x) \mathrm dx} \int Q(x) e^{\int P(x) \mathrm dx} \mathrm dx + Ce^{-\int P(x)\mathrm dx}`
	},
	{
		"title": "Fibonacci Binomial Coefficients Identity",
		"description": "Sum up the shallow diagonals of Pascal's triangle to make Fibonacci numbers",
		"latex": String.raw`F_{n+1}=\binom n 0 +\binom {n-1}1+\binom{n-2}2+\cdots + \binom{n - \lfloor n/2 \rfloor }{\lfloor n/2 \rfloor}`
	},
	{
		"title": "Bellman Optimality Equation",
		"description": "Somehow connected to reinforcement learning! Credit to Constantine.",
		"latex": String.raw`V^{\pi*}(s)=  \max_a \{ {R(s,a) + \gamma \sum_{s'} P(s'|s,a) V^{\pi*}(s')} \}`
	},
	{
		"title": "Definition of a Well-founded Relation",
		"description": "R is well-founded iff every proper subset contains a minimal element with respect to R. Credit to Constantine.",
		"latex": String.raw`(\forall S \subseteq X) [S \neq \emptyset \implies (\exists m \in S) (\forall s \in S) \lnot(sRm)]`
	},
	{
		"title": "Estimation Lemma",
		"description": "Credit to Ben Napier.",
		"latex": String.raw`\left|\int_\gamma f(z) \mathrm dz\right|\leq L(\gamma) \sup_\gamma | f |`
	},
	{
		"title": "Chaitin's Constant",
		"description": "The probability that a randomly constructed program will halt.",
		"latex": String.raw`\Omega_{F} = \sum_{p \in P_F} 2^{-|p|}`
	},
	{
		"title": "Cauchy's Differentiation Formula",
		"description": "Credit to epm",
		"latex": String.raw`f^{(n)}(a) = \frac{n!}{2\pi i} \oint_{\gamma} \frac{f(z)}{(z-a)^{n+1}} \mathrm{d}z`
	},
	{
		"title": "Defintion of the Quasi-Stationary Distribution",
		"description": "Getting rid of absorbing states.",
		"latex": String.raw`\forall B \in \mathcal{B}(\mathcal{X}^a), \forall t \ge 0, P_\nu(Y_t\in B, T > t) = \nu(B)P_\nu(T>t)`
	},
	{
		"title": "Addition of Sound Levels in Decibels",
		"description": "50dB + 50dB --> ~53dB!",
		"latex": String.raw`L_{ab} = 10\log_{10}\left(10^{L_a/10}+10^{L_b/10}\right)`
	},
	{
		"title": "Fast-Growing Hierarchy",
		"description": "You wanna see some real speed?",
		"latex": String.raw`f_\alpha(n)=\begin{cases}n+1&\alpha=0\\f_\beta(n)&\alpha=\beta+1\\f_{\alpha[n]}(n)&\text{else}\end{cases}`
	},
	{
		"title": "Feigenbaum-Cvitanović Functional Equation",
		"description": "Damn, that's a mouthful.",
		"latex": String.raw`g(g(x)) = - \frac{1}{\alpha} g(\alpha x)`
	},
	{
		"title": "Dirac Equation",
		"description": "Relativistic wave equation. Credit to Leon.",
		"latex": String.raw`i \hbar \gamma^\mu \partial_\mu \psi - mc \psi = 0 `
	},
	{
		"title": "Feynman's Trick",
		"description": "Essentially differentiating under the integral sign; the given problem is extremely difficult to solve otherwise. Credit to Aarsh Chotalia.",
		"latex": String.raw`\int_0^\pi\ln(1-2\alpha\cos x+\alpha^2) \mathrm dx=2\pi\ln|\alpha|`
	},
	{
		"title": "Lorentz Factor",
		"description": "Time and length change by a factor of gamma when objects move near the speed of light.",
		"latex": String.raw`\gamma = \frac{1}{\sqrt{1-\frac{v^{2}}{c^{2}}}}`
	},
	{
		"title": "Time Dilation",
		"description": "Clocks moving at high speed will be observed to tick slower.",
		"latex": String.raw`\Delta t=\frac{\Delta t_{0}}{\sqrt{1-\frac{v^{2}}{c^{2}}}}`
	},
	{
		"title": "Gauss's Flux Theorem (integral form)",
		"description": "Use the divergence theorem to get to the differential form.",
		"latex": String.raw`\oiint_S\mathbf{E}\cdot\mathrm{d}\mathbf{A}=\frac{Q}{\varepsilon_{0}}`
	},
	{
		"title": "Doppler Effect",
		"description": "beep beep beep",
		"latex": String.raw`\frac{f_{o}}{f_{s}} = \frac{\lambda_{s}}{\lambda_{o}}= \frac{v\pm v_{o}}{v\mp v_{s}}`
	},
	{
		"title": "Bernoulli's Equation",
		"description": "I included just because it included this bonkers \varrho thingy. What was wrong with \rho??",
		"latex": String.raw`P_{1} + \varrho gy_{1} + \frac{1}{2} \varrho v_{1}^{2} = P_{2} + \varrho gy_{2} + \frac{1}{2} \varrho v_{2}^{2}`
	},
	{
		"title": String.raw`Relation between \(K_p\) and \(K_c\)`,
		"description": "Credit to Freddie Bullard.",
		"latex": String.raw`K_p = K_c(RT)^{\Delta n}`
	},
	{
		"title": "Van der Waals Equation",
		"description": "Generalization of the Ideal Gas Law.",
		"latex": String.raw`\left (P + a \frac{n^2}{V^2} \right ) ( V - nb) = nRT`
	},
	{
		"title": "Maxwell-Boltzmann Distribution",
		"description": "Don't have enough statistical mechanics formulas.",
		"latex": String.raw`f(v) = 4 \pi v^2 \left ( \frac {m}{2 \pi k T} \right )^{3/2} e^{-\frac{mv^2}{2k_BT}}`
	},
	{
		"title": "Cayley-Hamilton Theorem",
		"description": "Square matrices over commutative rings are annihilated by their own characteristic polynomial.",
		"latex": String.raw`p(\lambda) = \det (\lambda \mathbf{I}_n - \mathbf{A}) \implies p(\mathbf{A}) = 0`
	},
	{
		"title": String.raw`Chudnovsky's Formula for \(\pi\)`,
		"description": "This formula, based on a Ramanujan formula, was used to calculate pi to the tens of trillions of digits.",
		"latex": String.raw`\frac{1}{\pi} = 12 \sum^\infty_{k=0} \frac{(-1)^k (6k)! (545140134k + 13591409)}{(3k)!(k!)^3 (640320)^{3k + 3/2}}`
	},
	{
		"title": "Residue Theorem",
		"description": "Q: Why did the mathematician name her dog Cauchy? A: Because it left a residue at every pole.",
		"latex": String.raw`\frac{1}{2\pi i}\oint_\gamma f(z)\mathrm{d}z=\sum_{p\text{ pole}}\mathbf{I}(\gamma,p)\mathrm{Res}(f,p)`
	},
	{
		"title": "Center of Mass",
		"description": "In a uniform gravitation field, this is the same as the center of gravity.",
		"latex": String.raw`\mathbf{R} = \frac 1M \iiint_Q \rho(\mathbf{r}) \mathbf{r} \mathrm dV`
	},
	{
		"title": "The Fundamental Group of the Circle",
		"description": "It's isomorphic to the group of integers. Credit to fish.",
		"latex": String.raw`\pi_1(S^1) \cong \mathbb{Z}`
	},
	{
		"title": "Definition of the Operator Norm on a Finite Dimensional Banach Space.",
		"description": "Credit to Richik Chakraborty.",
		"latex": String.raw`\left \{ \frac{\| T(x) \|'}{\| x \|} : x \neq 0, x \in X \right \} \equiv \left \{ \| T(x) \|' : \| x \| = 1,  x \in X \right\}`
	},
	{
		"title": "Green's Theorem",
		"description": "Credit to Facejo.",
		"latex": String.raw`\oint_C (L \mathrm dx +M \mathrm  dy)=\iint_D \left(\frac{\partial M}{\partial x}-\frac{\partial L}{\partial y} \right) \mathrm dx \mathrm dy`
	},
	{
		"title": "Portfolio Variance",
		"description": "Used to compute the covariance of a portfolio made up of n different assets, if the single variances and covariances are known. Credit to Marco.",
		"latex": String.raw`\sigma^2_z = \left (\sum_{i=1}^n w^2_i  \sigma^2_i \right )+ 2 \left ( \sum_{i=1}^{n-1}\sum_{j = i+1}^n w_i w_j \sigma_{i, j} \right )`
	},
	{
		"title": "Newton's Method",
		"description": "Credit to https://github.com/lucasalavapena.",
		"latex": String.raw`x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}`
	},
	{
		"title": "Shannon Entropy",
		"description": "Credit to https://github.com/lucasalavapena.",
		"latex": String.raw`H(X) = -\sum_{i=1}^n P(x_i) \log_2 P(x_i)`
	},
	{
		"title": "Pinsker's inequality",
		"description": "It's possible I'm off by a factor of two here.",
		"latex": String.raw`\|\mu - \nu\|_{\mathrm{ TV}} \le \sqrt{2 D_{\rm KL}(\mu\|\nu)}`
	},
	{
		"title": "Sackur-Tetrode equation",
		"description": "Entropy of monatomic ideal gas. Credit to Haydn Gwyn.",
		"latex": String.raw`\frac{S}{k_BN} = \ln\left[ \frac VN \left( \frac{4\pi m}{3h^2} \frac UN \right)^{3/2} \right] + \frac52`
	},
	{
		"title": "Condtional Entropy",
		"description": "The amount of information needed to describe the outcome of a random variable given the outcome of another variable.",
		"latex": String.raw`\mathrm H (Y|X)=-\sum_{x \in \mathcal X, y \in \mathcal Y}p(x,y)\log{\frac{p(x,y)}{p(x)}}`
	},
	{
		"title": "Force-Potential Relation",
		"description": "Force is defined as the negative gradient of the potential energy function. Credit to Mayank Kumar.",
		"latex": String.raw`\mathbf F=-\frac{\partial U}{\partial x}\hat{\mathbf i}-\frac{\partial U}{\partial y}\hat{\mathbf j}-\frac{\partial U}{\partial z}\hat{\mathbf k}=-\vec\nabla(U)`
	},
	{
		"title": "Beta Function",
		"description": "A special function that is closely related to the gamma function and to binomial coefficients. Credit to Salil Gokhale.",
		"latex": String.raw`B(x,y)=\int_{0}^{1}t^{x-1}(1-t)^{y-1} \mathrm{d}t`
	},
	{
		"title": "Moist Adiabatic Lapse Rate",
		"description": "The rate that the temperature falls with respect to altitude in a wet environment.",
		"latex": String.raw`\Gamma_{\mathrm{w}} = -\frac{\mathrm{d}T}{\mathrm{d}z} = g\frac{\left(1 + \frac{H_{\mathrm{v}} r}{R_{\mathrm{sd}} T}\right)}{\left(c_{\mathrm{pd}} + \frac{H_{\mathrm{v}}^2 r}{R_{\mathrm{sw}} T^2}\right)}`
	},
	{
		"title": "Cardano's Formula",
		"description": "Solution for a depressed cubic. Credit to TetanicRain7592.",
		"latex": String.raw`\sqrt[3]{-\frac{q}{2} + \sqrt{\frac{q^{2}}{4} + \frac{p^{3}}{27}}} + \sqrt[3]{-\frac{q}{2} - \sqrt{\frac{q^{2}}{4} + \frac{p^{3}}{27}}}`
	},
	{
		"title": "General Cubic Formula",
		"description": "The deltas represents the cubic's discriminants. You must choose /any/ cube root and /any/ square root that doesn't result in C = 0. Credit to TetanicRain7592.",
		"latex": String.raw`C = \sqrt[3]{\frac{\Delta_{1} \pm \sqrt{\Delta_{1}^{2} - 4\Delta_{0}^{3}}}{2}}`
	},
	{
		"title": "Riemann Zeta Function",
		"description": "This formula works when the real part of s is greater than 1. Other cases require analytic continuation.",
		"latex": String.raw`\zeta(s)=\frac1{\Gamma (s)}\int_0^\infty\frac{x^{s-1}}{e^x-1}\mathrm dx`
	},
	{
		"title": "Tangent Sum of Angles Formula",
		"description": "Credit to TetanicRain7592.",
		"latex": String.raw`\tan(\alpha \pm \beta) = \frac{\tan(\alpha) \pm \tan(\beta)}{1 \mp \tan(\alpha)\tan(\beta)}`
	},
	{
		"title": "Inner Product of Continuous Complex Valued Functions",
		"description": "Credit to Zeus Hernández.",
		"latex": String.raw`\langle f,g\rangle=\int_{0}^{2\pi}f(t)\overline{g(t)}\mathrm{d}t`
	},
	{
		"title": "Definition of a Psuedorandom Generator",
		"description": "Crypto means Cryptography!",
		"latex": String.raw`\left | \Pr_{x \leftarrow \{0,1\}^k} [\mathcal A (G(x)) = 1] - \Pr_{x \leftarrow \{0,1\}^{p(k)}} [\mathcal A (x) = 1]\right | < \mu(k)`
	},
	{
		"title": "Generalized Stokes' theorem",
		"description": "One theorem to rule them all",
		"latex": String.raw`\int_{\partial M} \omega = \int_M \mathrm{d} \omega`
	},
	{
		"title": "Cartan's magic formula",
		"description": "A cool little magic trick",
		"latex": String.raw`\mathcal{L}_X = \mathrm{d} \circ \iota_X + \iota_X \circ \mathrm{d}`
	},
	{
		"title": "Ridge Regression",
		"description": "Estimate coefficients of a regression with L2 regularization",
		"latex": String.raw`\ell(\mathbf{w}) = \frac{1}{N} \| \mathbf{Xw} - \mathbf{y} \|_2^2 + \lambda \|\mathbf{w}\|_2^2`
	},
	{
		"title": "Evidence Lower Bound (ELBO)",
		"description": "Lower bound on the log-likelihood of observed data",
		"latex": String.raw`L(\phi,\theta;x) = \mathbb{E}_{z \sim q_\phi\left(\cdot\mid x\right)} \left[ \ln\frac{p_\theta(x,z)}{q_\phi(z\mid x)} \right]`
	},
	{
		"title": "Langevin Dynamics (Overdamped)",
		"description": "Stochastic gradient flow with a deterministic potential and random noise",
		"latex": String.raw`\mathrm{d}x_t = -\nabla U(x_t) \mathrm{d}t + \sqrt{2\beta^{-1}} \mathrm{d}W_t`
	},
	{
		"title": "Titu's Lemma",
		"description": "Engel's form/corollary of the famous Cauchy-Schwarz Inequality. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\frac{a^2_1}{b_1}+\frac{a^2_2}{b_2}+\cdots+\frac{a^2_n}{b_n}\ge\frac{(a_1+a_2+\cdots+a_n)^2}{b_1+b_2+\cdots+b_n}`
	},
	{
		"title": "Time-Dependent Schrödinger’s Equation",
		"description": "A version of the Schrödinger’s Equation that governs full dynamical evolution of a quantum state over time. Proposed by arcanine672 (teamyui)",
		"latex": String.raw`i\hbar\frac{\partial}{\partial t}\Psi(\mathbf{r},t)=\left[-\frac{\hbar^2}{2\mu}\nabla^2+V(\mathbf{r},t)\right]\Psi(\mathbf{r},t)`
	},
	{
		"title": "Jordan Block",
		"description": "Serves as a building block of a Jordan normal form. Proposed by caden3269 (teamyui)",
		"latex": String.raw`J = \begin{pmatrix} \lambda & 1 & 0 & \cdots & 0 \\ 0 & \lambda & 1 & \cdots & 0 \\ 0 & 0 & \lambda & \cdots & 0 \\ \vdots & \vdots & \vdots & \ddots & 1 \\ 0 & 0 & 0 & \cdots & \lambda \end{pmatrix}`
	},
	{
		"title": "Jordan Normal Form",
		"description": "Represents a linear operator on a finite-dimensional vector space. Proposed by caden3269 (teamyui)",
		"latex": String.raw`J=\begin{pmatrix} J_{k_1}(\lambda_1) & 0 & \cdots & 0 \\ 0 & J_{k_2}(\lambda_2) & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & J_{k_m}(\lambda_m)\end{pmatrix}`
	},
	{
		"title": "Multi-Angle Tangent Formula",
		"description": "This identity expresses the multiple of the angle of the tan function. Proposed by arcanine672 (teamyui)",
		"latex": String.raw`\tan(n\theta)=\frac{\sum_{k=0}^{\lfloor\frac{n-1}{2}\rfloor}(-1)^k\binom{n}{2k+1}\tan^{2k+1}\theta}{\sum_{k=0}^{\lfloor\frac{n}{2}\rfloor}(-1)^k\binom{n}{2k}\tan^{2k}\theta}`
	},
	{
		"title": "Weight",
		"description": "The force of gravity acting on mass. Proposed by ians.site (teamyui)",
		"latex": String.raw`W=mg`
	},
	{
		"title": "Faà di Bruno's Formula",
		"description": "Generalises the chain rule for higher derivatives. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\frac{\mathrm{d}^n}{\mathrm{d}x^n}f(g(x))=\sum_{m_1+2m_2+\cdots+nm_n=n}\frac{n!}{m_1!,1!^{m_1}m_2!,2!^{m_2}\cdots m_n!,n!^{m_n}}\cdot f^{(m_1+\cdots+m_n)}(g(x))\cdot\prod_{j=1}^n\left(g^{(j)}(x)\right)^{m_j}`
	},
	{
		"title": "Jensen's Inequality for Convex Functions",
		"description": "States that the value of a convex function of an average is less than or equal to the average of the values of the function. Proposed by caden3269 (teamyui)",
		"latex": String.raw`f\left(\sum\lambda_i x_i\right)\leq\sum\lambda_i f(x_i)`
	},
	{
		"title": "Jensen's Inequality for Concave Functions",
		"description": "States that the value of a concave function of an average is greater than or equal to the average of the values of the function. Proposed by caden3269 (teamyui)",
		"latex": String.raw`f\left(\sum\lambda_i x_i\right)\geq\sum\lambda_i f(x_i)`
	},
	{
		"title": "Standard Model Lagrangian",
		"description": "Describes three of the four known fundamental forces (excluding gravity) with all known elementary particles. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\mathcal L_{\mathrm{SM}}=-\frac{1}{4}G^a_{\mu\nu}G^{a\mu\nu}-\frac{1}{4}W^i_{\mu\nu}W^{i\mu\nu}-\frac{1}{4}B_{\mu\nu}B^{\mu\nu}+\bar{\psi}i\gamma^\mu D_\mu\psi+|D_\mu\phi|^2-\mu^2\phi^\dagger\phi-\lambda(\phi^\dagger\phi)^2-(\bar{Q}_L Y_d\phi d_R+\bar{Q}_LY_u\tilde{\phi} u_R+\bar{L}_L Y_e\phi e_R)+\mathrm{h.c.}`
	},
	{
		"title": "Riemann Curvature Tensor",
		"description": "Used to define and measure the intrinsic curvatrure of a space or manifold. Proposed by caden3269 (teamyui)",
		"latex": String.raw`R_{\sigma\mu\nu}^{\rho}=\partial_{\mu}\Gamma_{\sigma\nu}^{\rho}-\partial_{\nu}\Gamma_{\sigma\mu}^{\rho}+\Gamma_{\lambda\mu}^{\rho}\Gamma_{\sigma\nu}^{\lambda}-\Gamma_{\lambda\nu}^{\rho}\Gamma_{\sigma\mu}^{\lambda}`
	},
	{
		"title": "Christoffel Symbols of the First Kind",
		"description": "Represents the projections of the change of coordinate basis vectors along other basis directions in curved space. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\Gamma_{\alpha\mu\nu}=\frac{1}{2}(\partial_{\mu}g_{\alpha\nu}+\partial_{\nu}g_{\mu\alpha}-\partial_{\alpha}g_{\mu\nu})`
	},
	{
		"title": "Christoffel Symbols of the Second Kind",
		"description": "Similar to the Christoffel Symbols of the First Kind, except they define how vectors transform. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\Gamma_{\mu\nu}^{\lambda}=\frac{1}{2}g^{\lambda\alpha}(\partial_{\mu}g_{\alpha\nu}+\partial_{\nu}g_{\mu\alpha}-\partial_{\alpha}g_{\mu\nu})`
	},
	{
		"title": "Dyson Series",
		"description": "Pertubative expansion of the time evolution operator. Proposed by caden3269 (teamyui)",
		"latex": String.raw`U(t,t_0) = \sum_{n=0}^{\infty} \left(-\frac{i}{\hbar} \right)^n \int_{t_0}^{t} \mathrm{d}t_1 \int_{t_0}^{t_1} \mathrm{d}t_2 \cdots \int_{t_0}^{t_{n-1}} \mathrm{d}t_n\,V_I(t_1)V_I(t_2) \cdots V_I(t_n)`
	},
	{
		"title": "Kinetic Energy",
		"description": "Energy in the form of motion. Proposed by caden3269 (teamyui)",
		"latex": String.raw`E_k=\frac{1}{2}mv^2`
	},
	{
		"title": "Impulse",
		"description": "Measure of the force applied to an object over a period of time. Proposed by caden3269 (teamyui)",
		"latex": String.raw`J=\Delta p`
	},
	{
		"title": "Bethe-Weizsäcker Mass Formula",
		"description": "Approximates the total binding energy of an atomic nucleus. Proposed by caden3269 (teamyui)",
		"latex": String.raw`B(A,Z)=a_v A-a_s A^{\frac{2}{3}}-a_c\frac{Z(Z-1)}{A^{\frac{1}{3}}}-a_a\frac{(A-2Z)^2}{A}+\delta(A,Z)`
	},
	{
		"title": "Definition of a Dedekind Cut",
		"description": "Defines the real numbers as partitions of the rational numbers. Proposed by Anonymous1 (teamyui)",
		"latex": String.raw`\mathbb{R}=\{\alpha\subseteq\mathbb{Q}:\alpha\neq\varnothing\land \alpha\neq\mathbb{Q}\land(\forall p\in \alpha)(\forall q\in\mathbb{Q})(q<p\implies q\in \alpha)\land(\forall p\in \alpha)(\exists r\in \alpha)(p<r)\}`
	},
	{
		"title": "Definition of a Commutative Square",
		"description": "Shows how different objects and morphisms connect. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\begin{matrix}A&\xrightarrow f&B\\\downarrow g&&\downarrow h\\C&\xrightarrow k&D\end{matrix}\implies h\circ f=k\circ g`
	},
	{
		"title": "Stefan-Boltzmann Law",
		"description": "Describes the thermal radiation emitted by a blackbody. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\frac{P}{A}=\sigma T^4`
	},
	{
		"title": "Jacobi Triple Product",
		"description": "A fundamental and powerful identity used as a building block for Jacobi theta functions. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\prod_{n=1}^{\infty}(1-x^{2n})(1+x^{2n-1}z^2)\left(1+\frac{x^{2n-1}}{z^2}\right)=\sum_{m=-\infty}^{\infty} x^{m^2}z^{2m}`
	},
	{
		"title": "Faulhaber's Formula",
		"description": "Used to calculate the sum of the k-th powers of the first n positive integers, quite niche. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\sum_{k=1}^n k^p=\frac{1}{p+1}\sum_{j=0}^p(-1)^j\binom{p+1}{j}B_j n^{p+1-j}`
	},
	{
		"title": "Vieta's Formula for \(\pi\)",
		"description": "The first infinite product in European mathematics, but converges quite slow compared to others like Gauss-Legendre and Chudnovsky. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\frac{2}{\pi}=\frac{\sqrt 2}{2}\cdot\frac{\sqrt{2+\sqrt 2}}{2}\cdot\frac{\sqrt{2+\sqrt {2+\sqrt 2}}}{2}\cdots`
	},
	{
		"title": "Euler's Pentagonal Number Theorem",
		"description": "Fundamental identity used in number theory and combinatorics. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\prod_{n=1}^\infty(1-x^n)=\sum_{k=-\infty}^\infty(-1)^kx^{\frac{k(3k-1)}2}`
	},
	{
		"title": "Tsiolkovsky Rocket Equation",
		"description": "Calculates ideal change in velocity of rockets based on expelling mass. Explains why rockets are mostly made of fuel. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\Delta v=v_e\ln\left(\frac{m_0}{m_f}\right)`
	},
	{
		"title": "Ceva's Theorem",
		"description": "Used to determine if three cevians intersect at a common point. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\frac{AF}{FB}\cdot\frac{BD}{DC}\cdot\frac{CE}{EA}=1`
	},
	{
		"title": "Möbius Inversion",
		"description": "Reverses summatory relations between arithmetic functions. Proposed by caden3269 (teamyui)",
		"latex": String.raw`g(n)=\sum_{d|n}f(d),f(n)=\sum_{d|n}\mu(d)g\left(\frac{n}{d}\right)`
	},
	{
		"title": "Euler's Four-Square Identity",
		"description": "Shows that the product of two numbers that each can be expressed as the sum of four squares is itself a sum of four squares. Proposed by caden3269 (teamyui)",
		"latex": String.raw`(x_1^2+x_2^2+x_3^2+x_4^2)(y_1^2+y_2^2+y_3^2+y_4^2)=(x_1y_1-x_2y_2-x_3y_3-x_4y_4)^2+(x_1y_2+x_2y_1+x_3y_4-x_4y_3)^2+(x_1y_3-x_2y_4+x_3y_1+x_4y_2)^2+(x_1y_4+x_2y_3-x_3y_2+x_4y_1)^2`
	},
	{
		"title": "Menelaus's Theorem",
		"description": "Relates the ratios of line segments created by a straight transversal line that intersects a triangle's sides. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\frac{PB}{CP}\cdot\frac{QC}{QA}\cdot\frac{AR}{RB}=1`
	},
	{
		"title": "Fermat's Christmas Theorem",
		"description": "States that every prime number that leaves a remainder of one when divided by four can be expressed as the sum of two squares. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\forall p\in\mathbb{P}, p\equiv 1\pmod 4\iff\exists a,b\in\mathbb{Z}:p=a^2+b^2`
	},
	{
		"title": "Brahmagupta's Formula",
		"description": "Calculates the area of a cyclic quadrilateral. Proposed by caden3269 (teamyui)",
		"latex": String.raw`[ABCD]=\sqrt{\left(\frac{a+b+c+d}{2}-a\right)\left(\frac{a+b+c+d}{2}-b\right)\left(\frac{a+b+c+d}{2}-c\right)\left(\frac{a+b+c+d}{2}-d\right)}`
	},
	{
		"title": "Euler's Formula",
		"description": "Links exponential and trigonometric functions. Setting x=π gives Euler's identity. Proposed by caden3269 (teamyui)",
		"latex": String.raw`e^{i\theta}=\cos\theta+i\sin\theta`
	},
	{
		"title": "De Moivre's Theorem",
		"description": "Powerful tool used to compute powers and roots of complex numbers in polar form. Proposed by caden3269 (teamyui)",
		"latex": String.raw`(\cos\theta+i\sin\theta)^n=\cos(n\theta)+i\sin(n\theta)`
	},
	{
		"title": "Stewart's Theorem",
		"description": "Relates the lengths of sides of a triangle to the length of a cevian. Proposed by caden3269 (teamyui)",
		"latex": String.raw`man+dad=bmb+cnc`
	},
	{
		"title": "Nesbitt's Inequality",
		"description": "Famous inequality which is used often in math olympiads. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\frac{a}{b+c}+\frac{b}{c+a}+\frac{c}{a+b}\ge\frac{3}{2}`
	},
	{
		"title": "Vieta's Formulas",
		"description": "Used to solve for the sums and products of roots. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\forall P(x)=a_nx^n+a_{n-1}x^{n-1}+\cdots+a_0,a_n\neq 0,\sum_{i=1}^n r_i=-\frac{a_{n-1}}{a_n},\prod_{i=1}^n r_i=(-1)^n\frac{a_0}{a_n}`
	},
	{
		"title": "Dirichlet Eta Function",
		"description": "Alternating version of the Riemann Zeta Function. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\eta(s)=\sum_{n=1}^\infty\frac{(-1)^{n-1}}{n^s}`
	},
	{
		"title": "Dirichlet L Function",
		"description": "One of the genelisations of the Riemann Zeta Function. Proposed by caden3269 (teamyui)",
		"latex": String.raw`L(s,\chi)=\sum_{n=1}^\infty \frac{\chi(n)}{n^s}`
	},
	{
		"title": "Dedekind Zeta Function",
		"description": "Generalises the Riemann Zeta Function to algebraic number fields. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\zeta_K (s)=\sum_{I\triangleleft\mathcal{O}_K,I\neq 0}\frac{1}{N(I)^s}`
	},
	{
		"title": "Dedekind Eta Function",
		"description": "A holomorphic mdoular form of weight 1/2. Used in string theory. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\eta(\tau)=e^{\frac{\pi i\tau}{12}}\prod_{n=1}^{\infty}\left(1-e^{2n\pi i\tau}\right)=e^{\frac{1}{12}\pi i\tau}\prod_{n=1}^{\infty}(1-q^n)`
	},
	{
		"title": "Chowla-Selberg Equation",
		"description": "Used to evaluate the product of the Dedekind eta function over all complex multiplication points in a imaginary quadratic field. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\prod_{[\tau]}\sqrt{\Im(\tau)}|\eta(\tau)|^2=\frac{1}{4\pi\sqrt{|D|}}\left(\prod_{k=1}^{|D|}\Gamma\left(\frac{k}{|D|}\right)^{\chi_D (k)}\right)^{\frac{w}{2h}}`
	},
	{
		"title": "Legendre Duplication Formula",
		"description": "Allows products of Gamma functions to be expressed as a single Gamma function. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\Gamma(z)\Gamma\left(z+\frac{1}{2}\right)=2^{1-2z}\sqrt{\pi}\Gamma(2z)`
	},
	{
		"title": "Minkowski's Bound",
		"description": "Gives an upper bound of the norm of ideals to be checked to determine the class number of a number field. Proposed by caden3269 (teamyui)",
		"latex": String.raw`M_K=\sqrt{|D_K|}\left(\frac{4}{\pi}\right)^{r_2}\frac{n!}{n^n}`
	},
	{
		"title": "Riemann Xi Function",
		"description": "Variant of the Riemann Zeta Function. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\Xi(t)=\xi\left(\frac{1}{2}+it\right)`
	},
	{
		"title": "Landau Xi Function",
		"description": "Also a variant of the Riemann Zeta Function. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\Xi(t)=\xi\left(\frac{1}{2}+it\right)`
	},
	{
		"title": "Schwarz Reflection Principle",
		"description": "Used to extend the domain of a holomorphic function. Proposed by caden3269 (teamyui)",
		"latex": String.raw`f\in\mathcal{O}(\Omega^{+}),f(x)\in\mathbb{R}\forall x\in\Omega^{+}\cap\mathbb{R}\implies\tilde{f}(z)=\begin{cases}f(z)&\Im z\geq 0 \\ \overline{f(\bar{z})}&\Im z<0\end{cases}`
	},
	{
		"title": "Mellin Transform",
		"description": "Translates a function on the positive real axis into a complex-valued function. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\mathcal{M}\{f\}(s)=\int_0^\infty x^{s-1}f(x)\mathrm{d}x`
	},
	{
		"title": "Argument Principle",
		"description": "Derived from Cauchy's Residue Theorem, it relates the difference between the number of zeros and poles of a meromorphic function to a contour integral of the function's logarithmic derivative. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\frac{1}{2\pi i}\oint_{\gamma}\frac{f'(z)}{f(z)}\mathrm{d}z=N-P`
	},
	{
		"title": "Euler's Reflection Formula",
		"description": "Relates the Gamma function of a number to the Gamma function of its complement. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\Gamma(z)\Gamma(1-z)=\frac{\pi}{\sin(\pi z)}`
	},
	{
		"title": "Perron's Formula",
		"description": "Calculates the sum of an arithmetic function via an inverse Mellin Transform. Proposed by caden3269 (teamyui)",
		"latex": String.raw`A(x)={\sum_{n\leq x}}'a_n=\frac{1}{2\pi i}\int_{c-i\infty}^{c+i\infty}g(z)\frac{x^z}{z}\mathrm{d}z`
	},
	{
		"title": "Weak Law of Large Numbers",
		"description": "States that as a sample size grows, it's average converges in probability to the expected value. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\frac{1}{n}\sum_{i=1}^n X_i \xrightarrow{p} \mathbb{E}[X]`
	},
	{
		"title": "Strong Law of Large Numbers",
		"description": "States that as a sample size grows, it's average converges almost surely to the expected value. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\frac{1}{n}\sum_{i=1}^n X_i \xrightarrow{a.s.} \mathbb{E}[X]`
	},
	{
		"title": "Angular Momentum of a Rigid Body",
		"description": "Similar to momentum formula (p=mv), but accounts for angles. Proposed by caden3269 (teamyui)",
		"latex": String.raw`L=I\omega`
	},
	{
		"title": "Huygens-Steiner Theorem",
		"description": "Calculates the moment of inertia of a rigid body arounmd any given axis. Proposed by caden3269 (teamyui)",
		"latex": String.raw`I=I_G+Md^2`
	},
	{
		"title": "Snell's Law",
		"description": "Describes how waves change when passing between two different media. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\frac{\sin\alpha_1}{\sin\alpha_2}=\frac{n_2}{n_1}=\frac{v_1}{v_2}=\frac{\lambda_1}{\lambda_2}I=I_G+Md^2`
	},
	{
		"title": "Heat Equation",
		"description": "Tells us how much energy is needed to change the temperature of a substance. Proposed by caden3269 (teamyui)",
		"latex": String.raw`Q=m\int_{T_1}^{T_2} c(T)\mathrm{d}T`
	},
	{
		"title": "Maclaurin Series",
		"description": "A more specific version of the Taylor series. Proposed by caden3269 (teamyui)",
		"latex": String.raw`f(x)=\sum_{n=0}^{\infty}\frac{f^{(n)}(0)}{n!}x^n`
	},
	{
		"title": "Potential Energy of a System of Charges",
		"description": "Calculates total electrostatic potential energy, kind of self-explanatory. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\Pi=k\sum_{i>j}\frac{q_i q_j}{r_{ij}}=\frac{1}{2}\int\varphi(\vec r)\mathrm{d}q`
	},
	{
		"title": "Central Limit Theorem",
		"description": "States that the distribution of a sufficiently large sample size will approximate a normal curve. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\frac{\bar{X}_n-\mu}{\frac{\sigma}{\sqrt{n}}}\xrightarrow{d}\mathcal{N}(0,1)`
	},
	{
		"title": "Ampère’s Circuital Law",
		"description": "Relates magnetic field circulating around a closed loop to the net electric current passing through said loop. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\oint\mathbf{B}\cdot d\mathbf{l}=\mu_0\mathbf{I}_{\text{enclosed}}`
	},
	{
		"title": "Electric Dipole Moment",
		"description": "Quantifies separation of positive and negative charges within a system. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\vec{p}=\int\mathbf{r}dq`
	},
	{
		"title": "Magnetic Dipole Moment of a Current Loop",
		"description": "Represents a current loop's strength as a magnetic source. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\vec{d_\mu}=I\vec{S}`
	},
	{
		"title": "Kirchhoff's Law for Current",
		"description": "States that the total electrical current flowing into a junction is equal to the total current flowing out of that junction. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\sum I_{\text{in}}=\sum I_{\text{out}}`
	},
	{
		"title": "Kirchhoff's Law for Voltage",
		"description": "States that the closed line integral of a static electric field is always zero. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\oint\mathbf{E}\cdot\mathrm{d}\mathbf{l}=0`
	},
	{
		"title": "Laplace-Runge-Lenz Vector",
		"description": "A conserved quantity where a particle moves under an inverse-square central force. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\vec{\varepsilon}=\frac{\vec{L}\times\vec{v}}{GMm}+\vec{e_r}=\text{Const.}`
	},
	{
		"title": "Bézout's Lemma",
		"description": "States that for any two integers a and b, there exists integers x and y such that ax+by=gcd(a,b). Proposed by caden3269 (teamyui)",
		"latex": String.raw`\forall a,b\in\mathbb{Z},\exists x,y\in\mathbb{Z}:ax+by=\gcd(a,b)`
	},
	{
		"title": "Lucas' Theorem",
		"description": "Used to calculate binomial coefficients modulo a prime p. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\binom{n}{k}\equiv\prod_{i=0}^{m}\binom{n_i}{k_i}\pmod p`
	},
	{
		"title": "Carnot's Theorem",
		"description": "States that the signed algebraic sum of the perpendicular distances from the circumcenter to the triangle's sides is equal to the sum of the circumradius and inradius. Proposed by caden3269 (teamyui)",
		"latex": String.raw`PA^2+PB^2+PC^2=GA^2+GB^2+GC^2+3PG^2`
	},
	{
		"title": "Schur's Inequality",
		"description": "Classical algebraic inequality used in olympiad math. Proposed by caden3269 (teamyui)",
		"latex": String.raw`a^r(a-b)(a-c)+b^r(b-a)(b-c)+c^r(c-a)(c-b)\geq 0`
	},
	{
		"title": "Caro-Wei Theorem",
		"description": "Provides a strict lower bound for the size of the maximum independent set of a graph. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\alpha(G)\geq\sum_{v\in V}\frac{1}{d(v)+1}`
	},
	{
		"title": "Turán's Theorem",
		"description": "Defines the maximum number of edges in a graph that does not contain a complete subgraph. Proposed by caden3269 (teamyui)",
		"latex": String.raw`K_{r+1}\nsubseteq G\implies|E(G)|\leq\frac{r-1}{r}\frac{n^2}{2}`
	},
	{
		"title": "L’Hôpital’s Rule",
		"description": "States that a limit that results in an indeterminate form can be evaluated by taking the derivative of the numerator and denominator independently. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\lim_{x\to a}\frac{f(x)}{g(x)}=\lim_{x\to a}\frac{f'(x)}{g'(x)}`
	},
	{
		"title": "Leibniz Integral Rule",
		"description": "Also known as differentiation under the integral sign, it's used to find the derivative of a definite integral. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\frac{\mathrm{d}}{\mathrm{d}x}\left(\int_{a(x)}^{b(x)}f(x,t)\mathrm{d}t\right)=f(x,b(x))\cdot\frac{\mathrm{d}}{\mathrm{d}x}b(x)-f(x,a(x))\cdot\frac{\mathrm{d}}{\mathrm{d}x}a(x)+\int_{a(x)}^{b(x)}\frac{\partial}{\partial x}f(x,t)\mathrm{d}t`
	},
	{
		"title": "Lebesgue Integral of a Non-negative Function",
		"description": "Generalises Riemann integration, integrates horizontally instead of vertically. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\int_a^b f\mathrm{d}\mu=\sup\left\{\int\varphi\mathrm{d}\mu:0\le\varphi\le f\right\}`
	},
	{
		"title": "General Lebesgue Integral",
		"description": "Generalises Riemann integration, integrates horizontally instead of vertically. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\int f\mathrm{d}\mu=\int f^{+}\mathrm{d}\mu-\int f^{-}\mathrm{d}\mu`
	},
	{
		"title": "Monotone Convergence Theorem",
		"description": "States that any monotonic sequence of real numbers that is bounded will converge. Proposed by caden3269 (teamyui)",
		"latex": String.raw`f_n\uparrow f,f_n\geq0 \implies\lim_{n\to\infty}\int f_n\mathrm{d}\mu=\int f\mathrm{d}\mu`
	},
	{
		"title": "Rank-Nullity Theorem",
		"description": "States that the number of columns of a matrix is the sum of the rank and nullity of that matrix. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\dim(V)=\text{rank}(T)+\text{nullity}(T)`
	},
	{
		"title": "Ptolemy's Theorem",
		"description": "For any convex quadrilateral inscribed in a circle, the sum of the products of its two pairs of opposite sides is equal to the product of its diagonals. Proposed by caden3269 (teamyui)",
		"latex": String.raw`AC\cdot BD=AB\cdot CD+BC\cdot AD`
	},
	{
		"title": "Ptolemy's Inequality",
		"description": "For any four points in a plane, the product of the diagonals is less than or equal to the sum of the products of opposite sides. Proposed by arcanine672 (teamyui)",
		"latex": String.raw`A,B,C,D\in\mathbb{R}^n\implies|AC|\cdot|BD|\le|AB|\cdot|CD|+|BC|\cdot|AD|`
	},
	{
		"title": "Metric Tensor",
		"description": "Captures all the geometric and causal structure of spacetime. Proposed by caden3269 (teamyui)",
		"latex": String.raw`ds^2=g_{\mu\nu}dx^{\mu}dx^{\nu}`
	},
	{
		"title": "Ricci Tensor",
		"description": "Measures how a curved space or spacetime locally differs from a flat space. Proposed by caden3269 (teamyui)",
		"latex": String.raw`R_{\mu\nu}=R_{\mu\lambda\nu}^{\lambda}`
	},
	{
		"title": "Ricci Scalar",
		"description": "Assigns a single coordinate-independent number to every point on a manifold. Proposed by caden3269 (teamyui)",
		"latex": String.raw`R=g^{\mu\nu}R_{\mu\nu}`
	},
	{
		"title": "Einstein-Hilbert Action",
		"description": "Used to derive the Einstein Field Equations via the principle of stationary action. Proposed by caden3269 (teamyui)",
		"latex": String.raw`S_{\mathrm{EH}}=\frac{c^4}{16\pi G}\int d^4 x\sqrt{-g}R`
	},
	{
		"title": "Matter Action",
		"description": "Calculates the total action of matter fields within a gravitational background. Proposed by caden3269 (teamyui)",
		"latex": String.raw`S_{\mathrm{M}}=\int d^4 x\sqrt{-g}\mathcal L_{\mathrm{M}}`
	},
	{
		"title": "Schwarzschild Metric",
		"description": "A solution to the Einstein field equations, it describes the curvature of spacetime and the gravitational field outside a static, spherically symmetric mass. Proposed by caden3269 (teamyui)",
		"latex": String.raw`ds^2=-c^2\left(1-\frac{2GM}{rc^2}\right)dt^2+\frac{dr^2}{1-\frac{2GM}{rc^2}}+r^2(d\theta^2+\sin^2\theta d\phi^2)`
	},
	{
		"title": "Morris-Thorne Wormhole Metric",
		"description": "Describes a theoretical yet traversable wormhole without any event horizons or singularities. Proposed by caden3269 (teamyui)",
		"latex": String.raw`ds^2=-e^{-2\Phi(r)}dt^2+\frac{1}{1-\frac{b(r)}{r}}dr^2+r^2(d\theta^2+\sin^2\theta d\phi^2)`
	},
	{
		"title": "Definition of Dual Numbers",
		"description": "Defines a number which squared equals 0, but is not equal to 0. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\mathbb{D}=\left\{a+b\varepsilon|a,b\in\mathbb{R},\varepsilon=\begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix}\right\}`
	},
	{
		"title": "Tolmann-Oppenheimer Volkoff Equation",
		"description": "Describes the hydrostatic equilibrium of a static, spherically symmetric body of isotropic matter. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\frac{dP}{dr}=-\frac{Gm}{r^2}\rho\left(1+\frac{P}{\rho c^2}\right)\left(1+\frac{4\pi r^3P}{mc^2}\right)\left(1+\frac{2Gm}{rc^2}\right)^{-1}`
	},
	{
		"title": "Geodesic Equation",
		"description": "Describes the path of a particle in free fall through a curved spacetime. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\frac{d^2 x^\mu}{d\tau^2}+\Gamma_{\alpha\beta}^{\mu}\frac{dx^{\alpha}}{d\tau}\frac{dx^{\beta}}{d\tau}=0`
	},
	{
		"title": "Energy-Momentum Conservation",
		"description": "Expresses the local conservation of energy and momentum in curved spacetime. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\nabla_{\nu}T^{\mu\nu}=0`
	},
	{
		"title": "Kerr Metric",
		"description": "Describes the geometry of spacetime around an uncharged, axially symmetric, stationary rotating black hole. Proposed by caden3269 (teamyui)",
		"latex": String.raw`ds^2=-\left(1-\frac{2Mr}{r^2+a^2\cos^2\theta}\right)dt^2-\frac{4Mar\sin^2\theta}{r^2+a^2\cos^2\theta}dtd\phi+\frac{r^2+a^2\cos^2\theta}{r^2-2Mr+a^2}dr^2+(r^2+a^2\cos^2\theta) d\theta^2+\left(r^2+a^2+\frac{2Ma^2r\sin^2\theta}{r^2+a^2\cos^2\theta}\right)\sin^2\theta d\phi^2`
	},
	{
		"title": "Friedmann-Lemaître-Robertson-Walker Metric",
		"description": "Models a homogeneous, isotropic expanding universe. Proposed by caden3269 (teamyui)",
		"latex": String.raw`ds^2=-c^2 dt^2+a(t)^2\left\{\frac{dr^2}{1-kr^2}+r^2(d\theta^2+\sin^2\theta d\phi^2)\right\}`
	},
	{
		"title": "Weighted AM-GM Inequality",
		"description": "AM-GM but weighted. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\frac{w_1 x_1+w_2 x_2+\cdots+w_n x_n}{w_1+w_2+\cdots+w_n}\geq\sqrt[w_1+w_2+\cdots+w_n]{x_1^{w_1}\cdot x_2^{w_2}\cdots x_n^{w_n}}`
	},
	{
		"title": "Gram-Schmidt Orthonormalisation Process",
		"description": "Used to transform a set of linearly independent vectors into an orthonormal basis. Proposed by caden3269 (teamyui)",
		"latex": String.raw`u_k=v_k-\sum_{j=1}^{k-1}\langle v_k,e_j\rangle e_j, e_k=\frac{u_k}{\|u_k\|},u_1=v_1,e_1=\frac{u_1}{\|u_1\|}`
	},
	{
		"title": "Gram-Schmidt Determinantal Formulation",
		"description": "Determinant formulation of the Gram-Schmidt process (spectral decomposition could never). Proposed by caden3269 (teamyui)",
		"latex": String.raw`\mathbf{e}_j=\frac{1}{\sqrt{D_{j-1}D_j}}\begin{vmatrix}\langle\mathbf v_1,\mathbf v_1\rangle & \langle\mathbf v_2,\mathbf v_1\rangle & \cdots & \langle \mathbf v_j,\mathbf v_1 \rangle \\ \langle \mathbf v_1,\mathbf v_2 \rangle & \langle \mathbf v_2,\mathbf v_2 \rangle & \cdots & \langle \mathbf v_j,\mathbf v_2 \rangle \\ \vdots & \vdots & \ddots & \vdots \\ \langle \mathbf v_1,\mathbf v_{j-1} \rangle & \langle \mathbf v_2,\mathbf v_{j-1} \rangle & \cdots & \langle \mathbf v_j,\mathbf v_{j-1} \rangle\\ \mathbf v_1 & \mathbf v_2 & \cdots & \mathbf v_j\end{vmatrix}, \mathbf{u}_j=\frac{1}{D_{j-1}}\begin{vmatrix}\langle\mathbf v_1,\mathbf v_1\rangle & \langle\mathbf v_2,\mathbf v_1\rangle & \cdots & \langle \mathbf v_j,\mathbf v_1 \rangle \\ \langle \mathbf v_1,\mathbf v_2 \rangle & \langle \mathbf v_2,\mathbf v_2 \rangle & \cdots & \langle \mathbf v_j,\mathbf v_2 \rangle \\ \vdots & \vdots & \ddots & \vdots \\ \langle \mathbf v_1,\mathbf v_{j-1} \rangle & \langle \mathbf v_2,\mathbf v_{j-1} \rangle & \cdots & \langle \mathbf v_j,\mathbf v_{j-1} \rangle\\ \mathbf v_1 & \mathbf v_2 & \cdots & \mathbf v_j\end{vmatrix}`
	},
	{
		"title": "Chebyshev's Inequality",
		"description": "Sets a maximum limit on how far a random variable can deviate from its mean. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\mathbb{P}(|X-\mu|\geq k\sigma)\leq\frac{1}{k^2}`
	},
	{
		"title": "Chinese Remainder Theorem",
		"description": "Used to solve a system of simultaneous linear congruences with pairwise coprime moduli. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\mathbb{P}(|X-\mu|\geq k\sigma)\leq\frac{1}{k^2}`
	},
	{
		"title": "Heat Equation",
		"description": "Models how a physical quantity diffuses through a homogenous, isotropic medium. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\frac{\partial u}{\partial t}=\alpha\left(\frac{\partial^2 u}{\partial x^2}+\frac{\partial^2 u}{\partial y^2}+\frac{\partial^2 u}{\partial z^2}\right)`
	},
	{
		"title": "Dirac Delta Function",
		"description": "A function which spikes infinitely at a singular point. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\int_{-\infty}^{\infty} f(x)\delta(x-a)\mathrm{d}x=f(a),\int_{-\infty}^{\infty}\delta(x)\mathrm{d}x=1,\delta(ax)=\frac{1}{|a|}\delta(x)`
	},
	{
		"title": "Dirac Comb",
		"description": "Allows the representation of both continuous and discrete phenomena in a single framework of continuous Fourier analysis on temepered distributions without any reference of Fourier Series themselves. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\mathrm{III}_T(t):=\sum_{n=-\infty}^{\infty}\delta(t-nT)`
	},
	{
		"title": "Dirichlet Function",
		"description": "Classic function that is impossible to draw smoothly. Proposed by caden3269 (teamyui)",
		"latex": String.raw`D(x)=\begin{cases} 1 & x\in\mathbb{Q} \\ 0 & x\notin\mathbb{Q} \end{cases}`
	},
	{
		"title": "Weierstrass Function",
		"description": "Classic function that despite being continuous everywhere, it is differentiable nowhere. Proposed by caden3269 (teamyui)",
		"latex": String.raw`f(x)=\sum_{n=0}^{\infty}a^n\cos(b^n\pi x), \\ 0<a<1,b\in2\mathbb{N}+1,ab>1+\frac{3}{2}\pi`
	},
	{
		"title": "Weierstrass-Mandelbrot Function",
		"description": "An extension of the Weierstrass Function that has similar properties. Proposed by caden3269 (teamyui)",
		"latex": String.raw`z(x,y)=A\sum_{m=1}^{M}\sum_{n=1}^{n_{\max}}\gamma^{(D-3)n}\left[\cos(\phi_{m,n})-\cos\left\{2\pi\gamma^n\frac{\sqrt{x^2+y^2}}{L}\cos\left(\arctan\left(\frac{y}{x}\right)-\frac{\pi m}{M}\right)+\phi_{m,n}\right\}\right]`
	},
	{
		"title": "Bretschneider's Formula",
		"description": "Generalised Brahmagupta's formula that calculate the area for any quadrilateral. Proposed by caden3269 (teamyui)",
		"latex": String.raw`[ABCD]=\sqrt{\left(\frac{a+b+c+d}{2}-a\right)\left(\frac{a+b+c+d}{2}-b\right)\left(\frac{a+b+c+d}{2}-c\right)\left(\frac{a+b+c+d}{2}-d\right)-abcd\cdot\cos^2\left(\frac{\alpha+\gamma}{2}\right)}`
	},
	{
		"title": "Weibull Distribution",
		"description": "Versatile continuous probability distribution. Proposed by caden3269 (teamyui)",
		"latex": String.raw`f(x;\lambda,k)=\begin{cases}\frac{k}{\lambda}\left(\frac{x}{\lambda}\right)^{k-1}e^{-\left(\frac{x}{\lambda}\right)^{k}} & x\geq 0 \\ 0 & x<0 \end{cases}`
	},
	{
		"title": "Atiyah-Singer Index Theorem",
		"description": "States that for an elliptic differential operator on a compact manifold, the analytical index is equal to the topological index. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\mathrm{ind}(D)=\dim(\ker(D))-\dim(\ker(D^{\ast}))=\int_{M}\ch(\sigma(D))\wedge\mathrm{Td}(M)`
	},
	{
		"title": "Chern-Gauss-Bonnet Theorem",
		"description": "States that the Euler-Poincaré characteristic of a closed even-dimensional Riemannian manifold is equal to the integral of a certain polynomial of its curvature form. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\chi(M)=\int_{M}e(\Omega)`
	},
	{
		"title": "Poincaré–Hopf Theorem",
		"description": "Bridges local vector field behavior with a space's global shape. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\sum_{i}\mathrm{ind}_{x_i}(v)=\chi(M)`
	},
	{
		"title": "Korteweg-de Vries Equation",
		"description": "Famous exactly solvable PDE, commonly used to model dispersive nonlinear media. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\partial_{t}\phi+\partial_{x}^{3}\phi-6\phi\partial_{x}\phi=0`
	},
	{
		"title": "Hamiltonian of the Lieb-Liniger Model",
		"description": "Describes a gas of particles moving in one dimension. Proposed by caden3269 (teamyui)",
		"latex": String.raw`H=-\sum_{i=1}^{N}\frac{\partial^2}{\partial x_{i}^{2}}+2c\sum_{i=1}^{N}\sum_{j>i}^{N}\delta(x_{i}-x_{j})`
	},
	{
		"title": "Nonlinear Form of the Schrödinger Equation",
		"description": "Includes terms proportional to the wave's intensity in the Schrödinger equation, allowing for waves to interact with themselves. Proposed by caden3269 (teamyui)",
		"latex": String.raw`i\partial_{t}\psi=-\frac{1}{2}\partial_{x}^2\psi+\kappa|\psi|^2\psi`
	},
	{
		"title": "Definition of the d'Alembertian Operator",
		"description": "Extends the Laplacian to four dimensions in Minkowski spacetime. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\Box=\nabla^2-\frac{1}{c^2}\frac{\partial^2}{\partial t^2}`
	},
	{
		"title": "Sine-Gordon Equation",
		"description": "A second-order nonlinear hyperbolic PDE, it's completely integrable and supports soliton solutions. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\varphi_{tt}-\varphi_{xx}+\sin\varphi=0`
	},
	{
		"title": "Feynman Path Integral Formulation",
		"description": "States that a particle takes every possible path between an initial and final state. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\langle x_f,t_f|x_i,t_i\rangle=\int\mathcal{D}[x(t)]e^{\frac{iS[x]}{\hbar}}`
	},
	{
		"title": "Maxwell Action",
		"description": "Establishes how electric and magnetic fields behave and interact with charged particles. Proposed by caden3269 (teamyui)",
		"latex": String.raw`S=-\frac{1}{4}\int F_{\mu\nu}F^{\mu\nu}d^4 x`
	},
	{
		"title": "First Friedmann–Lemaître Equation",
		"description": "Describes how the expansion rate of the universe changes over time based on its total energy density and geometry. Proposed by caden3269 (teamyui)",
		"latex": String.raw`H^2=\left(\frac{\dot{a}}{a}\right)^2=\frac{8\pi G}{3}\rho-\frac{kc^2}{a^2}+\frac{\Lambda c^2}{3}`
	},
	{
		"title": "Second Friedmann–Lemaître Equation",
		"description": "Describes how the expansion rate of the universe accelerates or decelerates depending on the pressure exerted by energy. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\frac{\ddot{a}}{a}=-\frac{4\pi G}{3}\left(\rho+\frac{3p}{c^2}\right)+\frac{\Lambda c^2}{3}`
	},
	{
		"title": "Hodge Decomposition",
		"description": "States that every smooth differential form on any compact, oriented Rimannian manifold can be uniquely and orthogonally decomposed into an exact form, a co-exact form, and a harmonic form. Proposed by caden3269 (teamyui)",
		"latex": String.raw`H^{r}(X,\mathbf{C})=\bigoplus_{p+q=r}H^{p,q}(X)`
	},
	{
		"title": "Willans' Formula",
		"description": "A formula that can calculate the nth prime number, but isn't used due to being computationally heavy. Proposed by caden3269 (teamyui)",
		"latex": String.raw`p_{n}=1+\sum_{i=1}^{2^n}\left\lfloor\left(\frac{n}{\sum_{j=1}^{i}\left\lfloor\left(\cos\frac{(j-1)!+1}{j}\pi\right)^2\right\rfloor}\right)^{\frac{1}{n}}\right\rfloor`
	},
	{
		"title": "First Rogers-Ramanujan Identity",
		"description": "Relates to basic hypergeometric series and integer partitions. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\sum_{n=0}^{\infty}\frac{q^{n^2}}{(1-q)(1-q^2)\cdots(1-q^n)}=\prod_{n=1}^{\infty}\frac{1}{(1-q^{5n-1})(1-q^{5n-4})}`
	},
	{
		"title": "Second Rogers-Ramanujan Identity",
		"description": "Also relates to basic hypergeometric series and integer partitions. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\sum_{n=0}^{\infty}\frac{q^{n^2}}{(1-q)(1-q^2)\cdots(1-q^n)}=\prod_{n=1}^{\infty}\frac{1}{(1-q^{5n-1})(1-q^{5n-4})}`
	},
	{
		"title": "Hardy-Ramanujan Formula",
		"description": "Asymptotic formula for the partition function. Proposed by caden3269 (teamyui)",
		"latex": String.raw`p(n)\sim\frac{1}{4n\sqrt{3}}e^{\pi\sqrt{\frac{2n}{3}}}`
	},
	{
		"title": "Poisson Summation",
		"description": "States that the sum of a function's values at all integers equals the sum of its Fourier transform evaluated at all integers. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\sum_{n=-\infty}^{\infty}f(n)=\sum_{n=-\infty}^{\infty}\hat{f}(n)`
	},
	{
		"title": "Vandermonde Determinant",
		"description": "States that the determinant of a matrix whose rows consist of successive powers of variables is equal to the product of all pairwise differences of those variables. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\det\begin{pmatrix} 1 & x_0 & x_0^2 & \cdots & x_0^n \\ 1 & x_1 & x_1^2 & \cdots & x_1^n \\ 1 & x_2 & x_2^2 & \cdots & x_2^n \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ 1 & x_n & x_n^2 & \cdots & x_n^n \end{pmatrix} = \prod_{0\leq i<j \leq n}(x_j-x_i)`
	},
	{
		"title": "Cauchy Determinant",
		"description": "The determinant of a Cauchy matrix. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\det\left(\frac{1}{x_i+y_j}\right)=\frac{\prod_{i<j}(x_j-x_i)(y_j-y_i)}{\prod_{i,j}(x_i+y_j)}`
	},
	{
		"title": "Weierstrass Product for the Gamma Function",
		"description": "Expresses the reciprocal of the Gamma function as an infinite product. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\frac{1}{\Gamma(z)}=ze^{\gamma z}\prod_{n=1}^{\infty}\left(1+\frac{z}{n}\right)e^{-\frac{z}{n}}`
	},
	{
		"title": "Weierstrass Product for Sine",
		"description": "Expresses sin(πz) as an infinite product. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\sin(\pi z)=\pi z\prod_{n=1}^{\infty}\left(1-\frac{z^2}{n^2}\right)`
	},
	{
		"title": "Definition of a Cyclic Sum",
		"description": "A summation that cycles through all the values of a function and takes their sum. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\sum_{cyc}f(a_1,a_2,\dots,a_n)=f(a_1,a_2,\dots,a_n)+f(a_2,a_3,\dots,a_n,a_1)+f(a_3,a_4,\dots,a_n,a_1,a_2)+\cdots+f(a_n,a_1,a_2,\dots,a_{n-1})`
	},
	{
		"title": "Definition of the Cantor Set",
		"description": "A famous fractal that arises from removing the middle third of every segment infinitely, starting with [0,1]. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\mathscr{C}=\bigcap_{n=0}^{\infty}\mathscr{C}_{n},\mathscr{C}_{n}=\frac{\mathscr{C}_{n-1}}{3}\bigcup\left(\frac{2}{3}+\frac{\mathscr{C}_{n-1}}{3}\right),\mathscr{C}_0=[0,1]`
	},
	{
		"title": "Definition of a Symmetric Sum",
		"description": "A sum that is unchanged by any permutation of its variables. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\sum_{\mathrm{sym}}f(x_1,x_2,x_3,\dots,x_n)=\sum_{\sigma\in S_{n}}f(x_{\sigma(1)},x_{\sigma(2)},x_{\sigma(3)},\dots,x_{\sigma(n)})`
	},
	{
		"title": "PaperMath's Sum",
		"description": "An identity discovered by the AoPS user PaperMath. Proposed by caden3269 (teamyui), credits to PaperMath",
		"latex": String.raw`\sum_{i=0}^{2n-1}(10^i x^2)=\left(\sum_{j=0}^{n-1}(10^j 3x)\right)^{2}+\sum_{k=0}^{n-1}(10^k 2x^2)`
	},
	{
		"title": "Perimeter of an Ellipse",
		"description": "Famous for having no simple closed-form solution. Proposed by caden3269 (teamyui)",
		"latex": String.raw`P=4a\int_{0}^{\frac{\pi}{2}}\sqrt{1-e^2 \sin^2 \theta}\mathrm{d}\theta`
	},
	{
		"title": "Ramanujan's Final Approximation of the Perimeter of an Ellipse",
		"description": "His most accurate one, but he provided no rationale for it (sleep buff must have been that strong man). Proposed by caden3269 (teamyui)",
		"latex": String.raw`P\approx\pi\left((a+b)+\frac{3(a-b)^2}{10(a+b)+\sqrt{a^2+14ab+b^2}}+\frac{3ae^{20}}{2^{36}}\right)`
	},
	{
		"title": "Muirhead's Inequality",
		"description": "States that if one sequence of exponents majorizes another, than the symmetric sum of the first sequence is greater than or equal to that of the second. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\{p_1,p_2,\dots,p_n\} \succ \{q_1,q_2,\dots,q_n\} \implies \sum_{\mathrm{sym}}x_1^{p_1}x_2^{p_2}\cdots x_n^{p_n}\geq\sum_{\mathrm{sym}}x_1^{q_1}x_2^{q_2}\cdots x_n^{q_n}`
	},
	{
		"title": "Drake Equation",
		"description": "Estimates the number of active, communicative extraterrestrial civilisations in the Milky Way (supposedly). Proposed by caden3269 (teamyui)",
		"latex": String.raw`N=R_{\ast}\cdot f_p \cdot n_e \cdot f_l \cdot f_i \cdot f_c \cdot L`
	},
	{
		"title": "Lambert W Function",
		"description": "Used to solve equqations where the unknown apppears both as a variable and in the exponent. Proposed by caden3269 (teamyui)",
		"latex": String.raw`W(x)e^{W(x)}=x`
	},
	{
		"title": "Bessel's Differential Equation of Order \(\alpha\)",
		"description": "A second-order ordinary differential equation used to solve problems with cylindrical or spherical symmetry. Proposed by caden3269 (teamyui)",
		"latex": String.raw`x^2\frac{\mathrm{d}^2 y}{\mathrm{d}x^2}+x\frac{\mathrm{d}y}{\mathrm{d}x}+(x^2-\alpha^2)y=0`
	},
	{
		"title": "Third-Order Birch-Murnaghan Equation of State",
		"description": "Measures how a solid material's pressure changes under high compression. Proposed by caden3269 (teamyui)",
		"latex": String.raw`P(V)=\frac{3B_0}{2}\left[\left(\frac{V_0}{V}\right)^{7/3}-\left(\frac{V_0}{V}\right)^{5/3}\right]\left\{1+\frac{3}{4}(B'_0-4)\left[\left(\frac{V_0}{V}\right)^{2/3}-1\right]\right\}`
	},
	{
		"title": "Levinson's Inequality",
		"description": "Interesting inequality, in which the famous Ky Fan inequality is a special case of. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\frac{\sum_{i=1}^{n}p_i f(x_i)}{\sum_{i=1}^{n}p_i}-f\left(\frac{\sum_{i=1}^{n}p_i x_i}{\sum_{i=1}^{n}p_i}\right)\leq\frac{\sum_{i=1}^{n}p_i f(2a-x_i)}{\sum_{i=1}^{n}p_i}-f\left(\frac{\sum_{i=1}^{n}p_i(2a-x_i)}{\sum_{i=1}^{n}p_i}\right)`
	},
	{
		"title": "Ky Fan's Inequality",
		"description": "A famous refinement of the AM-GM inequality, and is a special case of Levinson's Inequality. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\frac{\left(\prod_{i=1}^{n}x_i\right)^{1/n}}{\left(\prod_{i=1}^{n}(1-x_i)\right)^{1/n}}\leq\frac{\frac{1}{n}\sum_{i=1}^{n}x_i}{\frac{1}{n}\sum_{i=1}^{n}(1-x_i)}`
	},
	{
		"title": "Trace-Reversed Form of the Einstein Field Equations",
		"description": "Directly expresses the Ricci tensor in terms of the Einstein field equations. Proposed by caden3269 (teamyui)",
		"latex": String.raw`R_{\mu\nu}=\frac{8\pi G}{c^4}\left(T_{\mu\nu}-\frac{1}{2}Tg_{\mu\nu}\right)+\Lambda g_{\mu\nu}`
	},
	{
		"title": "Definition of Exponentiation using \(e\)",
		"description": "Alternative identity for exponentiation with the Taylor series. Proposed by caden3269 (teamyui)",
		"latex": String.raw`b^a=e^{a\ln{(b)}}`
	},
	{
		"title": "Escape Velocity",
		"description": "Velocity needed to escape gravity of a planet. Proposed by caden3269 (teamyui)",
		"latex": String.raw`v=\sqrt{\frac{2GM}{r}}`
	},
	{
		"title": "Pick's Theorem",
		"description": "Used to find the area of a polygon plotted on an integer grid. Proposed by caden3269 (teamyui)",
		"latex": String.raw`A=I+\frac{B}{2}-1`
	},
	{
		"title": "Euler-Maclaurin Formula",
		"description": "Relates integrals to discrete sums. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\sum_{n=a}^{b}f(n)=\int_{a}^{b}f(x)\mathrm{d}x+\frac{f(b)+f(a)}{2}+\sum_{k=1}^{m}\frac{B_{2k}}{(2k)!}\left(f^{2k-1}(b)-f^{2k-1}(a)\right)+R_m`
	},
	{
		"title": "Euler's Criterion",
		"description": "Used to determine whether an integer is a quadratic residue modulo an odd prime. Proposed by caden3269 (teamyui)",
		"latex": String.raw`a^{\frac{p-1}{2}}\equiv\begin{cases}1\pmod{p} & \exists x:x^2\equiv a\pmod{p} \\ -1\pmod{p} & \nexists x\end{cases}`
	},
	{
		"title": "Wilson's Theorem",
		"description": "Provides a criterion for primality. Proposed by caden3269 (teamyui)",
		"latex": String.raw`(n-1)!\equiv-1\pmod{n}`
	},
	{
		"title": "Taylor Expansion of \(e^x\)",
		"description": "Infinite summation that approximates e^x. Proposed by caden3269 (teamyui)",
		"latex": String.raw`e^x=\sum_{n=0}^{\infty}\frac{x^n}{n!}=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\frac{x^4}{4!}+\frac{x^5}{5!}+\cdots`
	},
	{
		"title": "Law of Quadratic Reciprocity",
		"description": "Determines whether a quadratic equation is solvable for distinct odd primes. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\left(\frac{p}{q}\right)\left(\frac{q}{p}\right)=(-1)^{\frac{p-1}{2}\frac{q-1}{2}}`
	},
	{
		"title": "Weierstrass Elliptic Function",
		"description": "A famous elliptic function. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\wp(z;\omega_1,\omega_2):=\wp(z)=\frac{1}{z^2}+\sum_{\lambda\in\Lambda\setminus\{0\}}\left(\frac{1}{(z-\lambda)^2}-\frac{1}{\lambda^2}\right)`
	},
	{
		"title": "Lane-Emden Equation",
		"description": "Models hydrostatic equilibrium and density profiles of self-gravitating, spherically symmetric polytropic fluids. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\frac{1}{\xi^2}\frac{d}{d\xi}\left(\xi^2\frac{d\theta}{d\xi}\right)=-\theta^n`
	},
	{
		"title": "Saha Ionisation Equation",
		"description": "Relates the ionisation state of a gas to its temperature and density. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\frac{n_{r+1}n_e}{n_r}=\frac{G_{r+1}g_e}{G_r}\frac{(2\pi m_e kT)^{3/2}}{h^3}\exp\left(-\frac{\chi_r}{kT}\right)`
	},
	{
		"title": "Grad-Shafranov Equation",
		"description": "Determines the 2D ideal magnetohydrodrnamic equilibrium of a toroidal plasma inside an axisymmetric system. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\Delta^{\ast}\psi=-\mu_0 R^2\frac{dp}{d\psi}-F\frac{dF}{d\psi}`
	},
	{
		"title": "Time-Dependent Gross-Pitaevskii Equation",
		"description": "Non-linear variant of the Schrödinger equation used to describe the macroscopic ground state of a Bose-Einstein condensate. Proposed by caden3269 (teamyui)",
		"latex": String.raw`i\hbar\frac{\partial}{\partial t}\Psi(r,t)=\left(-\frac{\hbar^2}{2m}\nabla^2+V_{ext}(r)+g|\Psi(r,t)|^2\right)\Psi(r,t)`
	},
	{
		"title": "Time-Independent Gross-Pitaevskii Equation",
		"description": "Simplified version of the Gross-Pitaevskii equation. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\left(-\frac{\hbar^2}{2m}\nabla^2+V_{ext}(r)+g|\Psi(r)|^2\right)\Psi(r)=\mu\Psi(r)`
	},
	{
		"title": "Fresnel-Kirchhoff Diffraction Formula",
		"description": "Predicts how light propagates and diffracts after encountering an aperture or an obstacle. Proposed by caden3269 (teamyui)",
		"latex": String.raw`U(P)=\frac{1}{4\pi}\int_{S}\left[U\frac{\partial}{\partial n}\left(\frac{e^{iks}}{s}\right)-\frac{e^{iks}}{s}\frac{\partial U}{\partial n}\right]\mathrm{d}S`
	},
	{
		"title": "Adams-Williamson Equation",
		"description": "Calculates the density gradient within Earth's interior using seismic velocities. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\frac{d\rho}{dr}=-\frac{\rho g}{v_p^2-\frac{4}{3}v_s^2}`
	},
	{
		"title": "Riccati Differential Equation",
		"description": "Differential equation that generally can't be solved with direct integration, and usually requires you knowing a particular solution. Proposed by caden3269 (teamyui)",
		"latex": String.raw`y'=P(x)+Q(x)y+R(x)y^2`
	},
	{
		"title": "Logistic Function",
		"description": "A smooth, S-shaped curve used to model growth that starts exponentially but levels off. Proposed by caden3269 (teamyui)",
		"latex": String.raw`f(x)=\frac{L}{1+e^{-k(x-x_0)}}`
	},
	{
		"title": "Ramanujan-Sato Series for \(1/\pi\)",
		"description": "Provides a framework to generate rapidly converging series for calculating π. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\frac{1}{\pi}=\sum_{k=0}^{\infty}\frac{(\frac{1}{2})_k (s)_k (1-s)_k}{(1)_k^3}(Ak+B)z^k`
	},
	{
		"title": "Halley's Method",
		"description": "Iterative method for finding roots. Converges much faster than Newton-Raphson method but more computationally expensive. Proposed by caden3269 (teamyui)",
		"latex": String.raw`x_{n+1}=x_n-\frac{2f(x_n)f'(x_n)}{2[f'(x_n)]^2-f(x_n)f''(x_n)}`
	},
	{
		"title": "Full General Cubic Formula",
		"description": "Formula to calculate the roots of cubics. Proposed by caden3269 (teamyui)",
		"latex": String.raw`x=-\frac{b}{3a}-\frac{1}{3a}\sqrt[3]{\frac{2b^3-9abc+27a^2d\pm\sqrt{(2b^3-9abc+27a^2d)^2-4(b^2-3ac)^3}}{2}}-\frac{b^2-3ac}{3a\sqrt[3]{\frac{2b^3-9abc+27a^2d\mp\sqrt{(2b^3-9abc+27a^2d)^2-4(b^2-3ac)^3}}{2}}}`
	},
	{
		"title": "Fermat Primes",
		"description": "Special prime numbers, of which only 5 are known: 3, 5, 17, 257 and 65537. Proposed by caden3269 (teamyui)",
		"latex": String.raw`F_n=2^{2^n}+1`
	},
	{
		"title": "Caryle Circles",
		"description": "A circle that is used to visually find the roots of a quadratic equation. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\forall x^2-sx+p=0,x(x-s)+(y-1)(y-p)=0`
	},
	{
		"title": "Physicist's Form of Hermite Polynomials",
		"description": "Orthogonal polynomials used in quantum mechanics. Proposed by caden3269 (teamyui)",
		"latex": String.raw`H_n(x)=(-1)^n e^{x^2}\frac{d^n}{dx^n}e^{-x^2}`
	},
	{
		"title": "Probabilist's Form of Hermite Polynomials",
		"description": "Orthogonal polynomials used in probability, combinatorics and statistics. Proposed by caden3269 (teamyui)",
		"latex": String.raw`He_n(x )=(-1)^n e^{\frac{x^2}{2}}\frac{d^n}{dx^n}e^{-\frac{x^2}{2}}`
	},
	{
		"title": "Rodrigues' Rotation Formula",
		"description": "Used to rotate a vector in three-dimensional space around a specified axis. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\mathbf{v}_{\text{rot}}=\mathbf{v}\cos\theta+(\mathbf{k}\times\mathbf{v})\sin\theta+\mathbf{k}(\mathbf{k}\cdot\mathbf{v})(1-\cos\theta)`
	},
	{
		"title": "Rodrigues' Formula for Legendre Polynomials",
		"description": "Used to generate the Legendre polynomials of degree n, used to solve Legendre's differential equation. Proposed by caden3269 (teamyui)",
		"latex": String.raw`P_n(x)=\frac{1}{2^n n!}\frac{d^n}{dx^n}(x^2-1)^n`
	},
	{
		"title": "Legendre's Differential Equation",
		"description": "Fundamental second-order differential equation primarily used when solving Laplace's eqution in spherical coordinates. Proposed by caden3269 (teamyui)",
		"latex": String.raw`(1-x^2)\frac{d^2y}{dx^2}-2x\frac{dy}{dx}+n(n+1)y=0`
	},
	{
		"title": "Laplace's Equation",
		"description": "Second-order PDE that models steady-state phenomena. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\frac{\partial^2f}{\partial x^2}+\frac{\partial^2f}{\partial y^2}+\frac{\partial^2f}{\partial z^2}=0`
	},
	{
		"title": "Euclidean Algorithm",
		"description": "Fast method for finding the gcd of two numbers. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\gcd(a,b)=\begin{cases} a & b=0 \\ \gcd(b,a\bmod b) & b\neq 0 \end{cases}`
	},
	{
		"title": "Darcy-Weisbach Equation",
		"description": "Calculates the major head loss caused by friction as a fluid flows through a pipe or duct. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\Delta H=\left(\alpha+\frac{\beta}{\sqrt{V}}\right)\cdot\frac{LV^2}{2gD}`
	},
	{
		"title": "Kepler's Equation",
		"description": "Calculates the position of a body in an elliptical orbit at any given time. Proposed by caden3269 (teamyui)",
		"latex": String.raw`M=E-e\sin E`
	},
	{
		"title": "Euler's Number",
		"description": "Famous irrational number with many uses. Proposed by caden3269 (teamyui)",
		"latex": String.raw`e=\lim_{n\to\infty}\left(1+\frac{1}{n}\right)^n`
	},
	{
		"title": "Euler's Number in Fluid Mechanics",
		"description": "Dimensionless number used in fluid flow calculations. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\mathrm{Eu}=\frac{g_c\Delta P}{\frac{1}{2}\rho V^2}`
	},
	{
		"title": "The \(n\)th Derivative of \(x^n\)",
		"description": "Interesting finding. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\frac{\mathrm{d}^n}{\mathrm{d}x^n} x^n=n!`
	},
	{
		"title": "The \(n\)th Derivative of a Power Function",
		"description": "Also an interesting finding. Proposed by caden3269 (teamyui)",
		"latex": String.raw`m>n\implies\frac{\mathrm{d}^n}{\mathrm{d}x^n}x^m=\frac{m!}{(m-n)!}x^{m-n}`
	},
	{
		"title": "Squeeze Lemma",
		"description": "States that a function inbetween two others whose limits approach a point must also have their limit approach that point. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\forall f,g,h,a,L,\left(\exists\delta>0\forall x(0<|x-a|<\delta\implies g(x)\leq f(x)\leq h(x)\wedge\lim_{x\to a}g(x)=L\wedge\lim_{x\to a}h(x)=L\right)\implies\lim_{x\to a}f(x)=L`
	},
	{
		"title": "Madhava-Leibniz Series for \(\pi\)",
		"description": "A beautiful series for π that uses the arctan function, but converges slowly. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\frac{\pi}{4}=1-\frac{1}{3}+\frac{1}{5}-\frac{1}{7}+\frac{1}{9}-\cdots=\sum_{k=0}^{\infty}\frac{(-1)^k}{2k+1}`
	},
	{
		"title": "Shoelace Formula",
		"description": "Used to find the area of any non-self-intersecting polygon given the coordinates of its vertices. Proposed by caden3269 (teamyui)",
		"latex": String.raw`A=\frac{1}{2}|(x_1 y_2+x_2 y_3+\cdots+x_n y_1)-(y_1 x_2+y_2 x_3+\cdots+y_n x_1)|`
	},
	{
		"title": "Goldbach's Conjecture",
		"description": "Claims that every even integer greater than 2 can be expressed as the sum of two prime numbers. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\forall n\in\mathbb{N},(2n>2)\implies\exists x,y\in\mathbb{P}:x+y=2n`
	},
	{
		"title": "Downwards Löwenheim–Skolem Theorem",
		"description": "Used alongside the upwards Löwenheim–Skolem theorem to prove that first-order logic cannot exclusively pin down the size of infinite structures. Proposed by caden3269 (teamyui)",
		"latex": String.raw`|L|\leq\kappa,M\models T\implies\exists N\preceq M:N\models T,|N|\leq\kappa`
	},
	{
		"title": "Upwards Löwenheim–Skolem Theorem",
		"description": "Used alongside the downwards Löwenheim–Skolem theorem to prove that first-order logic cannot exclusively pin down the size of infinite structures. Proposed by caden3269 (teamyui)",
		"latex": String.raw`M\models T,|M|\geq|L|,\exists\lambda >|M|\implies\exists N\models T:M\preceq N,|N|=\lambda`
	},
	{
		"title": "Russell's Paradox",
		"description": "States that the set of all sets that doesn't contain themselves is logically inconsistent. Proposed by caden3269 (teamyui)",
		"latex": String.raw`R=\{x:x\notin x\}\implies(R\in R\iff R\notin R)`
	},
	{
		"title": "Cantor–Schröder–Bernstein Theorem",
		"description": "States that if two sets can both be injected into one another, they have the same cardinality. Proposed by caden3269 (teamyui)",
		"latex": String.raw`(X\hookrightarrow Y)\wedge(Y\hookrightarrow X)\implies(X\cong Y)`
	},
	{
		"title": "Axiom of Choice",
		"description": "One of the 10 axioms in Zermelo-Fraenkel set theory, states that given any collection of non-empty sets, it is possible to choose one element from each set to form a brand new set. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\forall\mathscr{F}\left(\varnothing\notin\mathscr{F}\implies\exists f:\mathscr{F}\to\bigcup\mathscr{F},\forall A\in\mathscr{F}(f(A)\in A)\right)`
	},
	{
		"title": "Cantor's Theorem",
		"description": "States that a set's power set has a strictly larger cardinality than the set itself. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\nexists f:X\to\mathcal{P}(X),\forall A\subseteq X,\exists x\in X:f(x)=A`
	},
	{
		"title": "Diagonal Lemma",
		"description": "Establishes the existence of self-referential statements in formal theories. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\forall\varphi(x),\exists\psi:\psi\leftrightarrow\varphi(\ulcorner\psi\urcorner)`
	},
	{
		"title": "Gödel’s Sentence",
		"description": "Famous statement that leads to a self-reference paradox in Gödel’s first incompleteness theorem. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\sim\exists x(x\mathrm{Dem}(g\mathrm{Sub}(17,g)))`
	},
	{
		"title": "Deduction Theorem",
		"description": "States that if you can prove a conclusion using a set of premises and an assumption, then you can also prove the implication using the same premises. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\Gamma,\varphi\vdash\psi\iff\Gamma\vdash\varphi\to\psi`
	},
	{
		"title": "Finitary Consequence Form of the Compactness Theorem",
		"description": "Asserts that semantic entailment is of a finitary nature. Proposed by caden3269 (teamyui)",
		"latex": String.raw`T\models\varphi\iff\exists T_0\subseteq T,|T_0|<\infty,T_0\models\varphi`
	},
	{
		"title": "Craig Interpolation Theorem",
		"description": "States that if a formula implies another formula, there exists a interpolant such that the two formulas imply each other. Proposed by caden3269 (teamyui)",
		"latex": String.raw`T\models(\varphi\to\psi)\implies\exists\theta(\varphi\models\theta\wedge\theta\models\psi)`
	},
	{
		"title": "Yoneda's Lemma",
		"description": "States that the set of natural transformations from a representable functor into any presheaf is naturally isomorphic to the value of that presheaf on the representing object. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\mathrm{Nat}(h_A,F)\cong F(A)`
	},
	{
		"title": "Hanf Number for Infinitary Logic",
		"description": "Big number. Proposed by caden3269 (teamyui)",
		"latex": String.raw`H(L_{\omega_1,\omega})=\beth_{\omega_1}`
	},
	{
		"title": "Hanf Number for Finitary Logic",
		"description": "Big number part 2. Proposed by caden3269 (teamyui)",
		"latex": String.raw`H(L_{\omega,\omega})=\aleph_0`
	},
	{
		"title": "Jensen's Diamond Principle",
		"description": "States that there exists a sequence of local guesses that can perfectly predict any global subset of the first uncountable infinity. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\Diamond_{\omega_1}`
	},
	{
		"title": "Forcing",
		"description": "Technique used to prove the independence of certain axioms. Proposed by caden3269 (teamyui)",
		"latex": String.raw`p\Vdash\varphi\iff\forall G\ni p,V[G]\models\varphi`
	},
	{
		"title": "Keisler Order",
		"description": "Ranks complete countable first-order theories by their complexity. Proposed by caden3269 (teamyui)",
		"latex": String.raw`T_1\trianglelefteq_K T_2`
	},
	{
		"title": "Morley's Categoricity Theorem",
		"description": "States that if a countable, first-order theory is categorical in some uncountable cardinality, then it is categorical in all uncountable cardinalities. Proposed by caden3269 (teamyui)",
		"latex": String.raw`I(T,\kappa)=1\implies\forall\lambda\geq\kappa,I(T,\lambda)=1`
	},
	{
		"title": "Vaught's Conjecture",
		"description": "Claims that for any complete first-order theory in a countable theory, the number of non-isomorphic countable models must be either countable or the size of the continuum. Proposed by caden3269 (teamyui)",
		"latex": String.raw`I(T,\aleph_0)\in\{\leq\aleph_0,2^{\aleph_0}\}`
	},
	{
		"title": "Axiom of Extensionality",
		"description": "One of the 10 axioms in Zermelo-Fraenkel set theory, states that two sets are equal if and only if they contain exactly the same members. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\forall A\forall B(\forall x(x\in A\iff x\in B)\implies A=B)`
	},
	{
		"title": "Axiom of Foundation",
		"description": "One of the 10 axioms in Zermelo-Fraenkel set theory, states that every non-empty set contains at least one element that is disjoint from it, preventing certain paradoxes, such as sets being members of themselves. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\forall A(A\neq\varnothing\implies\exists x(x\in A\wedge x\cap A=\varnothing))`
	},
	{
		"title": "Axiom of Pairing",
		"description": "One of the 10 axioms in Zermelo-Fraenkel set theory, states that given two sets, there exists a new set containing exactly these two sets as its members. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\forall x\forall y\exists z\forall w(w\in z\iff(w=x\vee w=y))`
	},
	{
		"title": "Axiom of Union",
		"description": "One of the 10 axioms in Zermelo-Fraenkel set theory, states that for any set of sets, a single set exists containing all the elements from each of those individual sets. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\forall A\exists U\forall x(x\in U\iff\exists B\in A(x\in B))`
	},
	{
		"title": "Axiom of Power Set",
		"description": "One of the 10 axioms in Zermelo-Fraenkel set theory, states that for any given set, there exists another set containing all possible subsets of that set. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\forall A\exists\mathcal{P}(A)\forall B(B\in\mathcal{P}(A)\iff B\subseteq A)`
	},
	{
		"title": "Axiom Schema of Replacement",
		"description": "One of the 10 axioms in Zermelo-Fraenkel set theory, states that if you take any set and replace each of its elements with another set according to a specific, definable rule, the resulting collection of those new elements also forms a valid set. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\forall p_1\dots\forall p_n\forall A[(\forall x(x\in A\implies\exists y(\varphi(x,y,p_1,\dots,p_n)\wedge\forall z(\varphi(x,z,p_1,\dots,p_n)\implies z=y))))\implies\exists B\forall y(y\in B\iff\exists x(x\in A\wedge\varphi(x,y,p_1,\dots,p_n)))]`
	},
	{
		"title": "Axiom Schema of Separation",
		"description": "One of the 10 axioms in Zermelo-Fraenkel set theory, states that given a set and any logical property, there is a subset of that set containing exactly those elements that satisfy that property. This is used to prevent Russell's paradox. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\forall X\forall p_1\dots\forall p_n\exists Y\forall u(u\in Y\iff(u\in X\wedge\varphi(u,p_1,\dots,p_n)))`
	},
	{
		"title": "Axiom of Infinity",
		"description": "One of the 10 axioms in Zermelo-Fraenkel set theory, it guarantees the existence of at least one infinite set. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\exists I(\varnothing\in I\wedge\forall x(x\in I\implies x\cup \{x\}\in I))`
	},
	{
		"title": "Axiom of Empty Set",
		"description": "One of the 10 axioms in Zermelo-Fraenkel set theory, asserts that there exists a set with absolutely no elements. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\exists\varnothing\forall x(x\notin\varnothing)`
	},
	{
		"title": "Modus Ponens",
		"description": "A fundamental rule in logic, stating that if a conditional is true, and the antecedent is true, then the consequent must also be true. Proposed by caden3269 (teamyui)",
		"latex": String.raw`(P\to Q)\wedge P\implies Q`
	},
	{
		"title": "Law of Double Negation",
		"description": "Negating a proposition twice beings you back to the original proposition's truth value (ok sherlock). Proposed by caden3269 (teamyui)",
		"latex": String.raw`\neg\neg P\iff P`
	},
	{
		"title": "Gödel’s Completeness Theorem",
		"description": "States that any statement that is logically valid across all interpretations of a theory can be formally deduced from that theory's axioms. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\Gamma\models\varphi\iff\Gamma\vdash\varphi`
	},
	{
		"title": "Gödel’s First Incompleteness Theorem",
		"description": "States that every consistent sufficiently expressive formal system contains an independent sentence, i.e, there will always be unprovably true statements. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\mathrm{Con}(T)\implies\exists\varphi(T\nvdash\varphi\wedge T\nvdash\neg\varphi)`
	},
	{
		"title": "Gödel’s Second Incompleteness Theorem",
		"description": "States that any system that is consistent cannot prove it's own consistency. Proposed by caden3269 (teamyui)",
		"latex": String.raw`T\nvdash\mathrm{Con}(T)`
	},
	{
		"title": "Łoś's Theorem",
		"description": "States that any first-order formula is true in the ultraproduct if and only if the set of indices where the formula holds belongs to the underlying ultrafilter. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\prod_{i\in I}\frac{X_i}{U}\models\varphi\iff\{i\in I:X_i\models\varphi\}\in U`
	},
	{
		"title": "Definition of a Holomorphically Convex Hull",
		"description": "The set of points where every holomorphic function is bounded by its maximum over a compact set. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\hat{K}_\Omega=\left\{z\in\Omega:|f(z)|\leq\sup_K|f|,\forall f\in\mathcal{O}(\Omega)\right\}`
	},
	{
		"title": "Maurer-Cartan Equation",
		"description": "Expresses the vanishing of curvature or the structural identity of a Lie group. Proposed by caden3269 (teamyui)",
		"latex": String.raw`d\omega+\frac{1}{2}[\omega,\omega]=0`
	},
	{
		"title": "Reflection Principle for Brownian Motion",
		"description": "States that given a threshold and a time, the probability that the running maximum up to that time reaches or exceeds the threshold is exactly twice the probability that the process itself ends up above the threshold at said time. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\mathbb{P}\left(\sup_{0\leq s\leq t}W(s)\geq a\right)=2\mathbb{P}(W(t)\geq a)`
	},
	{
		"title": "Principle of Stationary Action",
		"description": "States that the true physical path of a dynamical system is the one that makes the action an extremum. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\delta S=0`
	},
	{
		"title": "The \(\varepsilon\)-\(\delta\) Definition",
		"description": "The formal, rigorous formulation of a limit. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\forall\varepsilon>0,\exists\delta>0:\forall x,(0<|x-c|<\delta\implies|f(x)-L|<\varepsilon)`
	},
	{
		"title": "Hahn-Banach Theorem",
		"description": "Guarantees we can extend a continuous linear functional from a subspace to the entire vector space, without increasing its norm. Proposed by caden3269 (teamyui)",
		"latex": String.raw`p(x)\leq f(x)\implies\exists\supseteq f,F(x)\leq p(x)`
	},
	{
		"title": "Banach Contraction Principle",
		"description": "Guarantees the existence and uniqueness of fixed points for mappings in complete metric spaces. Proposed by caden3269 (teamyui)",
		"latex": String.raw`d(Tx,Ty)\leq\lambda d(x,y),0\leq\lambda<1\implies\exists! x:Tx=x`
	},
	{
		"title": "Hodge Star Operator",
		"description": "Translates cross products into wedge products and acts as a bridge for Poincaré duality. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\star=\Lambda^k(V)\to\Lambda^{n-k}(V),\alpha\wedge\star\beta=\langle\alpha,\beta\rangle\mathrm{vol.}`
	},
	{
		"title": "Fokker-Planck Equation",
		"description": "A PDE that describes the time evolution of the PDF of the position or velocity of a particle under the influence of drag forces and random forces. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\frac{\partial f}{\partial t}=-\frac{\partial}{\partial x}[\mu(x)f(x,t)]+\frac{1}{2}\frac{\partial^2}{\partial x^2}\left[\sigma^2(x)f(x,t)\right]`
	},
	{
		"title": "Noether's Theorem",
		"description": "States that every continuous symmetry of the action of a physical system with conservative forces has a corresponding conservation law. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\frac{d}{dt}\left(\sum_{\alpha}\frac{\partial\mathscr{L}}{\partial\dot{q}_{\alpha}}\xi_{\alpha}\right)=0 \\ \partial_{\mu}J^{\mu}=0`
	},
	{
		"title": "Pulsar Equation",
		"description": "Describes the structural layout of magnetic field lines surrounding a pulsar. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\left(1-\frac{r^2\sin^2\theta}{R_{LC}^2}\right)\frac{\partial^2\Psi}{\partial r^2}-\frac{\cos\theta}{r^2\sin\theta}\frac{\partial\Psi}{\partial\theta}+\frac{1}{r^2}\frac{\partial^2\Psi}{\partial\theta^2}=-\frac{II'(\Psi)}{\sin^2\theta}`
	},
	{
		"title": "Definition of the Laplacian Operator",
		"description": "Fundamental second-order differential operator defined as the divergence of the gradient of a scalar function. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\nabla^2 f=\frac{\partial^2 f}{\partial x_1^2}+\frac{\partial^2 f}{\partial x_2^2}+\cdots+\frac{\partial^2 f}{\partial x_n^2}`
	},
	{
		"title": "Gilbert-Varshamov Bound",
		"description": "Provides a lower bound on the maximum number of codewords in a q-ary error-correcting code of a certain block length and Hamming distance. Proposed by caden3269 (teamyui)",
		"latex": String.raw`A_q(n,d)\geq\frac{q^n}{\sum_{j=0}^{d-1}\binom{n}{j}(q-1)^j}\geq q^{n(1-h_q(d/n))}`
	},
	{
		"title": "Definition of Russell's Iota Operator",
		"description": "Used to represent the phrase \"the unique x such that P(x)\". Proposed by caden3269 (teamyui)",
		"latex": String.raw`\iota x P(x)=a\iff P(a)\wedge\forall y(P(y)\implies y=a)`
	},
	{
		"title": "Russell's Contextual Definition",
		"description": "Introduces the iota operator. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\psi(\iota x\phi (x))\equiv_{df}\exists x(\phi(x)\wedge\forall y(\phi(y)\to y=x)\wedge\psi(x))`
	},
	{
		"title": "Rayo's Function",
		"description": "BEEG CAT MEANS BEEG NUMBER- oh wait wrong one. Proposed by Anonymous2",
		"latex": String.raw`\mathrm{Rayo}(n)=\min\Big\{m\in\mathbb{N}:\forall\phi\in\mathcal{L}_\in^{(1)}\big(|\phi|\leq n\to\neg\exists t(t(x_1)=m\wedge\mathrm{Sat}(\ulcorner\phi\urcorner,t)\wedge\forall s(\mathrm{Sat}(\ulcorner\phi\urcorner,s)\to s(x_1)=m))\big)\Big\}`
	},
	{
		"title": "Naïve Comprehension Principle",
		"description": "States that for any property, there exists a set containing exactly those objects that satisfy that property. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\exists r\forall x(x\in r\iff\Phi(x))`
	},
	{
		"title": "Tutte-Whitney Polynomial",
		"description": "A powerful central two-variable graph invariant in combinatorics that encodes nearly all connectivity information about a graph. Proposed by caden3269 (teamyui)",
		"latex": String.raw`T(G;x,y)=\sum_{A\subseteq E}(x-1)^{r(E)-r(A)}(y-1)^{|A|-r(A)}`
	},
	{
		"title": "Erdős–Szekeres Upper Bound",
		"description": "States that any sequence of (r-1)(s-1)+1 distinct real numbers guarantees either an increasing subsequence of length r or a decreasing subsequence of length s. Proposed by caden3269 (teamyui)",
		"latex": String.raw`s,t\geq 2\implies R(s,t)\leq\binom{s+t-2}{s-1}`
	},
	{
		"title": "Goodman's Formula",
		"description": "Calculates the total number of monochromatic triangles. Proposed by caden3269 (teamyui)",
		"latex": String.raw`M(G)+T(G)=\binom{n}{3}-\frac{1}{2}\sum_{i=1}^{n}d_i(n-1-d_i)`
	},
	{
		"title": "Bethe-Salpeter Equation",
		"description": "A relativistic quantum field theory framework used to describe two-particle bound states. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\Psi(x_1,x_2)=\int d^4 x_3 d^4 x_4 G_0(x_1,x_2;x_3,x_4)\int d^4 x_5 d^4 x_6 I(x_3,x_4:x_5,x_6)\Psi(x_5,x_6)`
	},
	{
		"title": "Weierstrass Product Inequality",
		"description": "Fun inequality ig. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\prod_{i=1}^n (1+x_i)\geq 1+\sum_{i=1}^n x_i`
	},
	{
		"title": "Hasse-Weil Zeta Function",
		"description": "Counts the number of geometric points on an algebraic variety. Proposed by caden3269 (teamyui)",
		"latex": String.raw`Z(X,t)=\exp\left(\sum_{n=1}^{\infty}\frac{\#X(\mathbb{F}_{q^n})}{n}t^n\right)`
	},
	{
		"title": "Hasse-Weil L Function",
		"description": "Generalises the Riemann zeta function via attaching a complex analytic function to an algebraic variety over a number field (ts is literally the 500th function that generalises the riemann zeta function like what). Proposed by caden3269 (teamyui)",
		"latex": String.raw`L(X,s)=\prod_{p}L_p(X,s)`
	},
	{
		"title": "Cauchy-Binet Formula",
		"description": "Powerful generalisation of the determinant product rule that allows you to find the determinant of the product of two rectangular matrices. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\det(AB)=\sum_{S\in\binom{[n]}{m}}\det(A_{[m],S})\det(B_{S,[m]})`
	},
	{
		"title": "Binet-Cauchy Identity",
		"description": "A special case of the Cauchy-Binet formula. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\left(\sum_{i=1}^{n}a_i c_i\right)\left(\sum_{j=1}^{n}b_j d_j\right)=\left(\sum_{i=1}^{n}a_i d_i\right)\left(\sum_{j=1}^{n}b_j c_j\right)+\sum_{1\leq i<j\leq n}(a_i b_j-a_j b_i)(c_i d_j-c_j d_i)`
	},
	{
		"title": "Kepler's Third Law",
		"description": "Establishes the mathematical relationship between the time an object takes to orbit a central body and its distance from that body (the square of the orbital period is directly proportional to the cube of the semi-major axis). Proposed by caden3269 (teamyui)",
		"latex": String.raw`T^2=\frac{4\pi^2}{G(M+m)}a^3,T^2\propto a^3`
	},
	{
		"title": "Vis-Viva Equation",
		"description": "Calculates the orbital speed of a spacecraft or celestial body given any point oin its orbit. Proposed by caden3269 (teamyui)",
		"latex": String.raw`v=\sqrt{\mu\left(\frac{2}{r}-\frac{1}{a}\right)}`
	},
	{
		"title": "Orbital Period",
		"description": "Calculates the time an object takes to complete one full orbit around a central gravitational mass. Proposed by caden3269 (teamyui)",
		"latex": String.raw`T=2\pi\sqrt{\frac{a^3}{\mu}}`
	},
	{
		"title": "Specific Orbital Energy",
		"description": "Calculates the total mechanical energy per unit mass of an orbiting body. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\varepsilon=\frac{v^2}{2}-\frac{\mu}{r}=-\frac{\mu}{2a}`
	},
	{
		"title": "Venturi Meter Equation",
		"description": "Calculates theoretical flow rate of an incompressible fluid flowing through a Venturi meter via Bernoulli's equation and the continuity equation. Proposed by caden3269 (teamyui)",
		"latex": String.raw`Q=\frac{A_1 A_2}{\sqrt{A_1^2-A_2^2}}\sqrt{2gH}`
	},
	{
		"title": "Hohmann Transfer",
		"description": "Calculates the total velocity change required for a Hohmann transfer, a fuel-effecient orbital maneuver used to move between two circular, coplanar orbits. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\Delta v=\left|\sqrt{\mu\left(\frac{2}{r_1}-\frac{1}{\frac{r_1+r_2}{2}}\right)}-\sqrt{\frac{\mu}{r_1}}\right|+\left|\sqrt{\frac{\mu}{r_2}}-\sqrt{\mu\left(\frac{2}{r_2}-\frac{1}{\frac{r_1+r_2}{2}}\right)}\right|`
	},
	{
		"title": "Hagen-Poiseuille Equation",
		"description": "Calculates the pressure drop of an incompressible Newtonian fluid undergoing steady laminar flow through a long cylindrical pipe. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\Delta p=\frac{8\mu LQ}{\pi R^4}=\frac{8\pi\mu LQ}{A^2}`
	},
	{
		"title": "Rocket Thrust",
		"description": "Calculates the thrust produced by a rocket engine. Proposed by caden3269 (teamyui)",
		"latex": String.raw`F=\dot{m}V_e+(p_e-p_0)A_e`
	},
	{
		"title": "Virial Theorem",
		"description": "Relates the average total kinetic energy of a stable, bound system of particles to its average total potential energy. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\langle T\rangle=-\frac{1}{2}\sum_{k=1}^{N}\langle\mathbf{F}_k\cdot\mathbf{r}_k\rangle`
	},
	{
		"title": "Bi-elliptic Transfer",
		"description": "Calculates the total velocity change required for a bi-elliptic transfer, which while more complex than the Hohmann transfer, it's more fuel-efficient for larger target orbits. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\Delta v=\left|\sqrt{\mu\left(\frac{2}{r_1}-\frac{1}{\frac{r_1+r_b}{2}}\right)}-\sqrt{\frac{\mu}{r_1}}\right|+\left|\sqrt{\mu\left(\frac{2}{r_b}-\frac{1}{\frac{r_2+r_b}{2}}\right)}-\sqrt{\mu\left(\frac{2}{r_b}-\frac{1}{\frac{r_1+r_b}{2}}\right)}\right|+\left|\sqrt{\frac{\mu}{r_2}}-\sqrt{\mu\left(\frac{2}{r_2}-\frac{1}{\frac{r_2+r_b}{2}}\right)}\right|`
	},
	{
		"title": "First Lagrange Point",
		"description": "Approximation for the first Lagrange point, which is between the two bodies. Proposed by caden3269 (teamyui)",
		"latex": String.raw`L_1\approx a\left(\frac{m}{3M}\right)^{1/3}\left(1-\frac{1}{3}\left(\frac{m}{3M}\right)^{1/3}-\frac{1}{9}\left(\frac{m}{3M}\right)^{2/3}\right)`
	},
	{
		"title": "Second Lagrange Point",
		"description": "Approximation for the second Lagrange point, which is behind the smaller body. Proposed by caden3269 (teamyui)",
		"latex": String.raw`L_2\approx a\left(\frac{m}{3M}\right)^{1/3}\left(1+\frac{1}{3}\left(\frac{m}{3M}\right)^{1/3}-\frac{1}{9}\left(\frac{m}{3M}\right)^{2/3}\right)`
	},
	{
		"title": "Third Lagrange Point",
		"description": "Approximation for the third Lagrange point, which is behind the larger body. Proposed by caden3269 (teamyui)",
		"latex": String.raw`L_3\approx a\left(1+\frac{5m}{12M}-\frac{5m^2}{12M^2}-\frac{7529m^3}{20736M^3}\right)`
	},
	{
		"title": "Fourth Lagrange Point",
		"description": "Calculates the fourth Lagrange point, which is 60 degrees ahead of the smaller body along it's orbital path. Proposed by caden3269 (teamyui)",
		"latex": String.raw`L_4=\left(\frac{1}{2}-\mu,\frac{\sqrt{3}}{2}\right)`
	},
	{
		"title": "Fifth Lagrange Point",
		"description": "Calculates the fifth Lagrange point, which is 60 degrees behind the smaller body along it's orbital path. Proposed by caden3269 (teamyui)",
		"latex": String.raw`L_5=\left(\frac{1}{2}-\mu,-\frac{\sqrt{3}}{2}\right)`
	},
	{
		"title": "Collinear Lagrange Point Equation",
		"description": "The equation used to determine the first three Lagrange points. Due to this equation being a quintic, approximations or algorithms must be used. Proposed by caden3269 (teamyui)",
		"latex": String.raw`x-\frac{1-\mu}{|x+\mu|^3}(x+\mu)-\frac{\mu}{|x-1+\mu|^3}(x-1+\mu)=0`
	},
	{
		"title": "Air Resistance",
		"description": "Calculates the force opposing an object's motion through the air. Proposed by caden3269 (teamyui)",
		"latex": String.raw`F_D=\frac{1}{2}\rho v^2 C_d A`
	},
	{
		"title": "Hill Sphere",
		"description": "Calculates the approximate region of space around a smaller body where its own gravity dominates over the gravitational pull of a much larger primary body. Proposed by caden3269 (teamyui)",
		"latex": String.raw`R_H=a\left(\frac{m}{3M}\right)^{1/3}`
	},
	{
		"title": "Roche Limit",
		"description": "Calculates the minimum distance a body can approach a larger body before the planet's gravitational tidal forces overcome the smaller body's self-gravity. Proposed by caden3269 (teamyui)",
		"latex": String.raw`d=2.44R\left(\frac{\rho_M}{\rho_m}\right)^{1/3}`
	},
	{
		"title": "Mean Squared Error",
		"description": "One of the most common metrics used to evaluate performance of regression models, measures the average squared difference between the actual observed values and the values predicted by a model. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\mathrm{MSE}=\frac{1}{n}\sum_{i=1}^{n}(Y_i-\hat{Y}_i)^2`
	},
	{
		"title": "Mean Absolute Error",
		"description": "One of the most common metrics used to evaluate performance of regression models, measures the average of absolute differences between actual and predicted values. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\mathrm{MAE}=\frac{1}{n}\sum_{i=1}^{n}|Y_i-\hat{Y}_i|`
	},
	{
		"title": "Replicator Equation",
		"description": "Describes how the frequency of different strategies in a population changes over time. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\dot{x}_i=x_i(f_i-\phi)`
	},
	{
		"title": "Nash Equilibrium",
		"description": "States that no player benefits from changing their strategy. Proposed by caden3269 (teamyui)",
		"latex": String.raw`u_i(s_i^{\ast},s_{-i}^{\ast})\geq u_i(s_i,s_{-i}^{\ast}),\forall s_i\in S_i`
	},
	{
		"title": "Bayesian Nash Equilibrium",
		"description": "States that no player benefits from changing their strategy. Proposed by caden3269 (teamyui)",
		"latex": String.raw`u_i(s_i^{\ast},s_{-i}^{\ast})\geq u_i(s_i,s_{-i}^{\ast}),\forall s_i\in S_i`
	},
	{
		"title": "Puiseux Series",
		"description": "An extension of the Taylor series that allows for fractional exponents. Proposed by caden3269 (teamyui)",
		"latex": String.raw`f(x)=\sum_{k=k_0}^{\infty}c_k x^{k/n}`
	},
	{
		"title": "Jacobi Constant",
		"description": "The only known conserved quantity in the Circular Restricted Three-Body Problem. Proposed by caden3269 (teamyui)",
		"latex": String.raw`C_J=\Omega^2(x^2+y^2)+2\left(\frac{\mu_1}{r_1}+\frac{\mu_2}{r_2}\right)-(\dot{x}^2+\dot{y}^2+\dot{z}^2)`
	},
	{
		"title": "Jacobi Ellipsoid",
		"description": "A triaxial ellipsoid under hydrostatic equilibrium. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\frac{\Omega^2}{\pi G\rho}=2abc\int_0^\infty \frac{u\mathrm{d}u}{(a^2+u)(b^2+u)\sqrt{(a^2+u)(b^2+u)(c^2+u)}}`
	},
	{
		"title": "Neville Theta C Function",
		"description": "One of the four Neville theta functions, related to the Jacobi elliptic functions. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\theta_c(z,m)=\frac{\sqrt{2\pi}q(m)^{1/4}}{m^{1/4}\sqrt{K(m)}}\sum_{k=0}^\infty (q(m))^{k(k+1)}\cos\left(\frac{(2k+1)\pi z}{2K(m)}\right)`
	},
	{
		"title": "Neville Theta D Function",
		"description": "One of the four Neville theta functions, related to the Jacobi elliptic functions. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\theta_d(z,m)=\frac{\sqrt{2\pi}}{2\sqrt{K(m)}}\left(1+2\sum_{k=1}^\infty (q(m))^{k^2}\cos\left(\frac{\pi zk}{K(m)}\right)\right)`
	},
	{
		"title": "Neville Theta N Function",
		"description": "One of the four Neville theta functions, related to the Jacobi elliptic functions. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\theta_n(z,m)=\frac{\sqrt{2\pi}}{2(1-m)^{1/4}\sqrt{K(m)}}\left(1+2\sum_{k=1}^\infty (-1)^k(q(m))^{k^2}\cos\left(\frac{\pi zk}{K(m)}\right)\right)`
	},
	{
		"title": "Neville Theta S Function",
		"description": "One of the four Neville theta functions, related to the Jacobi elliptic functions. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\theta_s(z,m)=\frac{\sqrt{2\pi}q(m)^{1/4}}{m^{1/4}(1-m)^{1/4}\sqrt{K(m)}}\sum_{k=0}^\infty (-1)^k(q(m))^{k(k+1)}\sin\left(\frac{(2k+1)\pi z}{2K(m)}\right)`
	},
	{
		"title": "Jacobi's Elliptic sn Function",
		"description": "One of the three core Jacobi elliptic functions, appears in motion of a pendulum and the design of electronic elliptic filters. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\mathrm{sn}(u,m)=\frac{\sum_{n=-\infty}^\infty e^{\pi i\tau n^2}\cdot\sum_{n=-\infty}^\infty(-1)^{n-\frac{1}{2}}e^{(2n+1)i\zeta+\pi i\tau\left(n+\frac{1}{2}\right)^2}}{\sum_{n=-\infty}^\infty e^{\pi i\tau\left(n+\frac{1}{2}\right)^2}\cdot\sum_{n=-\infty}^\infty(-1)^n e^{2ni\zeta+\pi i\tau n^2}}`
	},
	{
		"title": "Jacobi's Elliptic cn Function",
		"description": "One of the three core Jacobi elliptic functions, appears in motion of a pendulum and the design of electronic elliptic filters. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\mathrm{cn}(u,m)=\frac{\sum_{n=-\infty}^\infty (-1)^n e^{\pi i\tau n^2}\cdot\sum_{n=-\infty}^\infty e^{(2n+1)i\zeta+\pi i\tau\left(n+\frac{1}{2}\right)^2}}{\sum_{n=-\infty}^\infty e^{\pi i\tau\left(n+\frac{1}{2}\right)^2}\cdot\sum_{n=-\infty}^\infty(-1)^n e^{2ni\zeta+\pi i\tau n^2}}`
	},
	{
		"title": "Jacobi's Elliptic dn Function",
		"description": "One of the three core Jacobi elliptic functions, appears in motion of a pendulum and the design of electronic elliptic filters. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\mathrm{dn}(u,m)=\frac{\sum_{n=-\infty}^\infty (-1)^n e^{\pi i\tau n^2}\cdot\sum_{n=-\infty}^\infty e^{2ni\zeta+\pi i\tau n^2}}{\sum_{n=-\infty}^\infty e^{\pi i\tau n^2}\cdot\sum_{n=-\infty}^\infty(-1)^n e^{2ni\zeta+\pi i\tau n^2}}`
	},
	{
		"title": "Jacobi's Identity",
		"description": "idk what to put here lol. Proposed by caden3269 (teamyui)",
		"latex": String.raw`\vartheta_3(0,q)^4=\vartheta_2(0,q)^4+\vartheta_4(0,q)^4`
	},
	{
		"title": "Polyakov Action",
		"description": "Describes the dynamics of a relativistic string moving through a target spacetime. Proposed by caden3269 (teamyui)",
		"latex": String.raw`S=-\frac{T}{2}\int d^2\sigma\sqrt{-h}h^{ab}\partial_{a}X^{\mu}\partial_{b}X_{\mu}`
	},
	{
		"title": "Wilson Loop",
		"description": "Tracks the phase shift a charged particle experiences when moving along a closed path. Proposed by caden3269 (teamyui)",
		"latex": String.raw`W(C)=\mathrm{Tr}\mathcal{P}\exp\left(ig\oint_{C}A_{\mu}dx^{\mu}\right)`
	},
	{
		"title": "Mode Expansion of a Closed String",
		"description": "Describes how a closed loop of string moves through spacetime while vibrating with various harmonics. Proposed by caden3269 (teamyui)",
		"latex": String.raw`X^{\mu}(\tau,\sigma)=x^{\mu}+2\alpha'p^{\mu}\tau+i\sqrt{\frac{\alpha'}{2}}\sum_{n\neq 0}\frac{1}{n}\left(\alpha_n^{\mu}e^{-2in(\tau-\sigma)}+\tilde{\alpha}_n^{\mu}e^{-2in(\tau+\sigma)}\right)`
	},
	{
		"title": "Operator Product Expansion",
		"description": "Characterises how the stress-energy tensor transforms under conformal maps. Proposed by caden3269 (teamyui)",
		"latex": String.raw`T(z)T(w)\sim\frac{c/2}{(z-w)^4}+\frac{2T(w)}{(z-w)^2}+\frac{\partial T(w)}{z-w}`
	},
	{
		"title": "Nambu-Goto Action",
		"description": "Describes the classical dynamics of a relativistic string moving through spacetime, similar to the Polyakov action. Proposed by caden3269 (teamyui)",
		"latex": String.raw`S=-T\int d^2\sigma\sqrt{-\det(\eta_{\mu\nu}\partial_a X^\mu\partial_b X_\mu)}`
	},
	{
		"title": "Virasoro Algebra",
		"description": "The fundamental symmetry algebra of two-dimensional conformal field theory and string theory. Proposed by caden3269 (teamyui)",
		"latex": String.raw`[L_m,L_n]=(m-n)L_{m+n}+\frac{c}{12}(m^3-m)\delta_{m+n,0}`
	},
	{
		"title": "11-Dimensional Supergravity Action",
		"description": "Serves as the low-energy effective field theory for M-theory. Proposed by caden3269 (teamyui)",
		"latex": String.raw`S=\frac{1}{2\kappa_{11}^2}\int d^{11}x\sqrt{-g}\left(R-\frac{1}{48}F_{MNPQ}F^{MNPQ}\right)-\frac{1}{12\kappa_{11}^2}\int C_3\wedge F_4\wedge F_4`
	},
	{
		"title": "Banks-Fischler-Shenker-Susskind Matrix Model",
		"description": "Important theoretical framework used to study non-pertubative string theory and quantum gravity. Proposed by caden3269 (teamyui)",
		"latex": String.raw`L=\mathrm{Tr}\left(\frac{1}{2}(D_t X^i)^2+\frac{1}{4}[X^i,X^j]^2+i\theta^T D_t\theta-\theta^T\gamma_i[X^i,\theta]\right)`
	},
	{
		"title": "Ishibashi-Kawai-Kitazawa-Tsuchiya Model",
		"description": "Provides a non-pertubative definition of Type IIB superstring theory. Proposed by caden3269 (teamyui)",
		"latex": String.raw`S=-\frac{1}{g^2}\mathrm{Tr}\left(\frac{1}{4}[Y_a,Y_b][Y_a,Y_b]+\frac{1}{2}\bar{\Psi}\Gamma^a[Y_a,\Psi]\right)`
	},
	{
		"title": "Maldacena Duality",
		"description": "Posits that a quantum gravity theory in (d+1)-dimensional AdS space is completely equivalent to a d-dimensional non-gravitational quantum field theory on its boundary. Proposed by caden3269 (teamyui)",
		"latex": String.raw`Z_{\mathrm{CFT}}[\phi_0]=Z_{\mathrm{string}}[\phi|_{\partial\mathrm{AdS}}=\phi_0]`
	},
	{
		"title": "Love Equation",
		"description": "Solve for I. Proposed by your true love",
		"latex": String.raw`9x-7I>3(3x-7u)`
	},
	{
		"title": "Merry Christmas",
		"description": "Simplify. Proposed by Santa Claus",
		"latex": String.raw`y=\frac{\ln\left(\frac{x}{m}-sa\right)}{r^2}`
	}
];
