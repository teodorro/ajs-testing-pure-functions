export default function checkHealth(creature) {
  if (creature === null) {
    throw Error('null argument');
  }
  const { health } = creature;
  if (Number.isNaN(health) || health == null) {
    throw Error('illegal argument');
  }
  if (health >= 50) {
    return 'healthy';
  }
  if (health >= 15 && health < 50) {
    return 'wounded';
  }
  if (health < 15) {
    return 'critical';
  }
  throw Error('illegal argument');
}
