export const errorHandler = (res, error) => {
    console.error(error); // Puedes agregar más detalles al registro de errores si es necesario

    if (error instanceof ValidationError) {
        return res.status(400).json({
            status: 'failed',
            payload: {
                message: 'Validation error',
                errors: error.array() // Utiliza error.array() en lugar de error
            }
        });
    }

    if (error.message === 'User not found') {
        return res.status(404).json({
            status: 'failed',
            payload: {
                message: 'User not found'
            }
        });
    }

    if (error.message === 'Invalid password') {
        return res.status(401).json({
            status: 'failed',
            payload: {
                message: 'Invalid password'
            }
        });
    }

    if (error.message === 'User not registered') {
        return res.status(400).json({
            status: 'failed',
            payload: {
                message: 'User not registered'
            }
        });
    }

    // Si no se cumplen las condiciones anteriores, asumimos un error interno del servidor
    return res.status(500).json({
        status: 'failed',
        payload: {
            message: 'Internal server error'
        }
    });
};