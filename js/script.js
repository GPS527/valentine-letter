/* Existing styles... */

/* Floating Items */
.floating-item {
    position: absolute;
    bottom: -50px;
    width: 50px;
    height: 50px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    animation: floatUp linear infinite;
    opacity: 0;
}

@keyframes floatUp {
    0% {
        transform: translateY(0) scale(1);
        opacity: 1;
    }
    100% {
        transform: translateY(-120vh) scale(1);
        opacity: 0;
    }
}

/* Adjust media queries if necessary */
@media (max-width: 600px) {
    /* Existing responsive styles... */
    .floating-item {
        width: 40px;
        height: 40px;
    }
}
